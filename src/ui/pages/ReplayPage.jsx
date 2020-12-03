import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Replay from '../../lib/replay/Replay.js';
import ReplayView from '../replay/ReplayView.jsx';

const ReplayPage = () => {
  const history = useHistory();
  const { safeReplayURL } = useParams();
  const replayURL = decodeURIComponent(safeReplayURL);

  const [replay, setReplay] = useState(null);

  // TODO: Replay clean-up on component unmount
  useEffect(() => {
    const fetchReplay = async () => {
      let buffer = null;
      try {
        const res = await fetch(replayURL);
        buffer = await res.arrayBuffer();
      } catch (e) {
        // TODO: Blob objects expire on unload, so for now, redirect home
        history.push('/');
        return;
      }
      setReplay(new Replay(buffer));
    };
    fetchReplay();
  }, [history, replayURL]);

  if (!replay) {
    return null;
  }

  return <ReplayView replay={replay} />;
};

export default ReplayPage;
