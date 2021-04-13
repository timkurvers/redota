import React, { useState } from 'react';

import Error from '../../../components/Error.jsx';
import Notice from '../../../components/Notice.jsx';
import db from '../../../../lib/database/index.js';
import isValidReplay from '../../../../lib/utils/isValidReplay.js';
import { useAsyncEffect } from '../../../hooks/index.js';

const MatchProcessor = (props) => {
  const { input: file, next } = props;

  const [[error, context], setErrorWithContext] = useState([]);
  const [feedback, setFeedback] = useState(null);

  useAsyncEffect(async () => {
    setErrorWithContext([]);
    setFeedback(null);

    if (!await isValidReplay(file)) {
      setFeedback('Not a valid Dota 2 replay file.');
      return;
    }

    const match = new db.models.Match();
    try {
      await match.update(file);
    } catch (e) {
      setErrorWithContext([e, 'parser']);
      return;
    }

    const { matchID } = match;
    if (matchID) {
      const duplicate = await db.models.Match.query.get({ matchID });
      if (duplicate) {
        setFeedback('That match is already on your dashboard.');
        return;
      }
    }

    try {
      await match.save();
    } catch (e) {
      setErrorWithContext([e, 'database']);
      return;
    }
    next(match);
  }, [file]);

  return (
    <>
      {!feedback && (
        <Notice>
          Please wait...
        </Notice>
      )}

      {feedback && (
        <Notice kind="error">{feedback}</Notice>
      )}

      {error && (
        <Error error={error} context={context} />
      )}
    </>
  );
};

export default MatchProcessor;
