import React, { useCallback, useRef, useState } from 'react';

import Button, { ButtonCollection } from '../../../components/Button.jsx';
import Match from '../Match.jsx';
import Notice from '../../../components/Notice.jsx';
import db from '../../../../lib/database/index.js';
import { createMatchlikeFrom, fetchMatchRequest } from '../../../../lib/api/index.js';
import { useAsyncEffect } from '../../../hooks/index.js';

const MatchFinder = (props) => {
  const { input: matchID, next, prev } = props;

  const [feedback, setFeedback] = useState(null);
  const [preview, setPreview] = useState(null);

  const replayURL = preview?.replayURL;

  // Hold a reference to request
  const requestRef = useRef(null);

  useAsyncEffect(async () => {
    const duplicate = await db.models.Match.query.get({ matchID });
    if (duplicate) {
      setFeedback('That match is already on your dashboard.');
      return;
    }

    const request = await fetchMatchRequest(matchID);
    requestRef.current = request;

    let response;
    try {
      response = await request();
    } catch (e) {
      if (e.response?.status === 404) {
        setFeedback('That match does not exist (yet).');
      } else if (e.response?.status === 429) {
        setFeedback('OpenDota query quota reached. Try again later.');
      } else {
        setFeedback('Search failed. Try again later.');
      }
      return;
    }

    const matchlike = createMatchlikeFrom(response.data);
    setPreview(matchlike);
  }, () => {
    // Cancel any ongoing request when component unmounts
    requestRef.current?.cancel();
  }, [matchID]);

  const onConfirm = useCallback(() => {
    if (replayURL) {
      next(replayURL);
    }
  }, [next, replayURL]);

  return (
    <>
      {!preview && !feedback && (
        <Notice>
          Searching for match...
        </Notice>
      )}

      {preview && (
        <>
          <p>
            Is this the match you are looking for?
          </p>

          <Match match={preview} isPreview />

          {!replayURL && (
            <>
              <Notice kind="error">
                No replay is available for this match.
              </Notice>

              <Button fancy onClick={prev}>
                Back
              </Button>
            </>
          )}

          {replayURL && (
            <>
              <ButtonCollection>
                <Button fancy onClick={onConfirm}>
                  Yes, add to ReDota
                </Button>

                <Button fancy onClick={prev}>
                  Back
                </Button>
              </ButtonCollection>

              <Notice>
                <strong>Note:</strong> The replay for this match will be downloaded automatically.
                <br />
                Replays are typically between 40 MB and 120 MB in size.
              </Notice>
            </>
          )}
        </>
      )}

      {feedback && (
        <>
          <Notice kind="error">
            {feedback}
          </Notice>

          <Button fancy onClick={prev}>
            Back
          </Button>
        </>
      )}
    </>
  );
};

export default MatchFinder;
