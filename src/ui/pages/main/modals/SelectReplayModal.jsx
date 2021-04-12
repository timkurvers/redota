import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../../../components/Modal.jsx';
import Wizard from '../../../components/Wizard.jsx';
import useTitle from '../../../hooks/useTitle.jsx';
import {
  MatchProcessor, ReplayFileDecompressor, ReplaySelectForm,
} from '../steps/index.js';

const SelectReplayModal = () => {
  useTitle('Select replay');
  const history = useHistory();

  const close = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Modal onClose={close}>
      <h2>Select local replay file</h2>

      <Wizard onDone={close}>
        <ReplaySelectForm />
        <ReplayFileDecompressor />
        <MatchProcessor />
      </Wizard>
    </Modal>
  );
};

export default SelectReplayModal;
