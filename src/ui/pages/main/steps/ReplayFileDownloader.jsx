import React, { useRef, useState } from 'react';

import Button, { ButtonCollection } from '../../../components/Button.jsx';
import Notice from '../../../components/Notice.jsx';
import { fetchReplayRequest } from '../../../../lib/api/index.js';
import { useAsyncEffect } from '../../../hooks/index.js';

const ReplayFileDownloader = (props) => {
  const { input: url, next, reset } = props;

  const [feedback, setFeedback] = useState(null);
  const [progress, setProgress] = useState(0);

  // Hold a reference to request
  const requestRef = useRef(null);

  useAsyncEffect(async () => {
    const request = fetchReplayRequest(url, {
      onDownloadProgress: (e) => {
        if (e.lengthComputable) {
          setProgress((e.loaded / e.total) * 100 | 0);
        }
      },
    });
    requestRef.current = request;

    let response;
    try {
      response = await request();
    } catch (e) {
      if (e.response?.status === 404) {
        setFeedback('Replay data for this match is not yet or no longer available.');
      } else {
        setFeedback('Replay data could not be retrieved. Try again later.');
      }
      return;
    }

    // Ensure the filename and last modified timestamps are preserved
    const filename = url.split('/').pop();
    const file = new File([response.data], filename, {
      lastModified: new Date(Date.parse(response.headers['last-modified'])),
    });
    next(file);
  }, () => {
    // Cancel any ongoing request when component unmounts
    requestRef.current?.cancel();
  }, [url]);

  return (
    <>
      {!feedback && (
        <>
          <Notice>
            Downloading replay file...
            <br />
            {progress}%
          </Notice>

          <ButtonCollection>
            <Button fancy onClick={reset}>
              Cancel
            </Button>
          </ButtonCollection>
        </>
      )}

      {feedback && (
        <>
          <Notice kind="error">
            {feedback}
          </Notice>

          <Button fancy onClick={reset}>
            Back
          </Button>
        </>
      )}
    </>
  );
};

export default ReplayFileDownloader;
