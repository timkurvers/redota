import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

import Replay from '../../lib/replay/Replay.js';
import ReplayView from '../replay/ReplayView.jsx';
import db from '../../lib/database/index.js';
import { ErrorBoundary, Icon, Link } from '../components/index.js';
import { useAsyncEffect, useTitle } from '../hooks/index.js';

const StyledCloseLink = styled(Link)`
  position: absolute;
  top: 16px;
  right: 15px;
  z-index: 5;

  i {
    position: relative;
    top: 1px;
  }
`;

const StyledMatchPage = styled.div`
  text-shadow: 1px 1px 1px #111,
               -1px 1px 1px #111,
               1px -1px 1px #111,
               -1px -1px 1px #111;
`;

const MatchPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const isMatchID = /^\d+$/.test(id);

  const [replay, setReplay] = useState(null);

  useTitle(`Match ${id}`);
  useAsyncEffect(async () => {
    // TODO: Errors thrown here are not caught/handled
    let match;
    if (isMatchID) {
      match = await db.models.Match.query.get({ matchID: +id });
    } else {
      match = await db.models.Match.query.get({ uuid: id });
    }
    if (!match) {
      // TODO: Redirect to 'find match by ID'-modal once implemented
      history.push('/');
      return;
    }

    const buffer = await match.replay.blob.arrayBuffer();
    setReplay(new Replay(buffer));
  }, () => {
    // TODO: Dispose of replay
  }, [id, isMatchID]);

  if (!replay) {
    return null;
  }

  return (
    <StyledMatchPage>
      <StyledCloseLink to="/">
        <Icon name="times" /> Close replay
      </StyledCloseLink>

      <ErrorBoundary context="replay">
        <ReplayView replay={replay} />
      </ErrorBoundary>
    </StyledMatchPage>
  );
};

export default MatchPage;
