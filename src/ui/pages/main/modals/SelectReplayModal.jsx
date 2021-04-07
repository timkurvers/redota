import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Error from '../../../components/Error.jsx';
import Match from '../../../../lib/database/Match.js';
import Modal from '../../../components/Modal.jsx';
import Notice from '../../../components/Notice.jsx';
import isValidReplay from '../../../../lib/utils/isValidReplay.js';
import useTitle from '../../../hooks/useTitle.jsx';

const SelectReplayModal = () => {
  useTitle('Select replay');
  const history = useHistory();

  const [error, setError] = useState(null);
  const [isReplayValid, setReplayValid] = useState(null);

  const close = useCallback(() => {
    history.push('/');
  }, [history]);

  const onReplaySelect = async (e) => {
    const file = e.target.files[0];
    let valid = null;
    if (file) {
      try {
        valid = await isValidReplay(file);
        if (valid) {
          const match = new Match();
          await match.update(file);
          await match.save();
          close();
          return;
        }
      } catch (err) {
        setError(err);
      }
    }
    setReplayValid(valid);
  };

  return (
    <Modal onClose={close}>
      <h2>Select local replay file</h2>

      <p>
        <input type="file" onChange={onReplaySelect} accept=".dem" />
      </p>

      {/* TODO: Normalize error handling  */}
      {error && (
        <Error context="database" error={error} />
      )}

      {isReplayValid === false && (
        <Notice kind="error">
          That is not a valid Dota 2 replay file :(
        </Notice>
      )}

      <p>
        The replay file you select is never uploaded to any server.
      </p>
    </Modal>
  );
};

export default SelectReplayModal;
