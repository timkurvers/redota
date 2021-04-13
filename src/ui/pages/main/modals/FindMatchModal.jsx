import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Modal from '../../../components/Modal.jsx';
import Wizard from '../../../components/Wizard.jsx';
import useTitle from '../../../hooks/useTitle.jsx';
import {
  MatchFinder, MatchIDForm, MatchProcessor, ReplayFileDecompressor, ReplayFileDownloader,
} from '../steps/index.js';

const FindMatchModal = () => {
  useTitle('Find match');
  const history = useHistory();
  const { prefill } = useParams();

  const close = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Modal onClose={close}>
      <h2>Find replay by match ID</h2>

      <Wizard onDone={close}>
        <MatchIDForm prefill={prefill} />
        <MatchFinder />
        <ReplayFileDownloader />
        <ReplayFileDecompressor />
        <MatchProcessor />
      </Wizard>
    </Modal>
  );
};

export default FindMatchModal;
