import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../../../components/Modal.jsx';
import useTitle from '../../../hooks/useTitle.jsx';

const FindMatchModel = () => {
  useTitle('Find match');
  const history = useHistory();

  const close = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Modal onClose={close}>
      <h2>Find match</h2>
      {/* TODO: Implement */}
      Finding matches by ID is not yet implemented
    </Modal>
  );
};

export default FindMatchModel;
