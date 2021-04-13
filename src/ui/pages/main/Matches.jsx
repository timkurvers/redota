import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Button, { ButtonCollection } from '../../components/Button.jsx';
import ErrorBoundary from '../../components/ErrorBoundary.jsx';
import Link from '../../components/Link.jsx';
import Notice from '../../components/Notice.jsx';
import db from '../../../lib/database/index.js';
import { useDatabaseQuery } from '../../hooks/index.js';

import Match from './Match.jsx';

const MatchList = () => {
  const history = useHistory();

  const [matches, isLoading] = useDatabaseQuery(() => (
    db.models.Match.query.orderBy('endedAt').reverse().toArray()
  ));

  const openFindMatchModal = useCallback(() => {
    history.push('/matches/find');
  }, [history]);

  const openSelectReplayModal = useCallback(() => {
    history.push('/matches/select');
  }, [history]);

  // Calculate replay size usage in megabytes
  let usage = null;
  if (!isLoading) {
    const bytes = matches.reduce((total, match) => total + match.replay.size, 0);
    usage = Math.round(bytes / (1000 * 1000));
  }

  const searching = (
    <Link to="/matches/find/5712001132">
      searching for a professional game
    </Link>
  );

  return (
    <>
      {/* TODO: Add loading indicator */}
      {!isLoading && matches.map((match) => (
        <Match key={match.uuid} match={match} />
      ))}

      {!isLoading && !matches.length && (
        <Notice kind="instructions">
          Get started with ReDota by {searching}.
        </Notice>
      )}

      <ButtonCollection>
        <Button fancy onClick={openFindMatchModal}>
          Find replay by match ID
        </Button>

        <Button fancy onClick={openSelectReplayModal}>
          Select local replay file
        </Button>
      </ButtonCollection>

      {usage > 0 && (
        <p>
          The above replays take up approximately <strong>{usage} MB</strong> of storage space
          in your browser. Use the trash cans to get rid of unwanted replays.
        </p>
      )}

      <p>
        <strong>Note:</strong> your browser may occasionally perform house keeping and remove
        website data including the replays. Maintain a local copy on your computer if you need them.
      </p>
    </>
  );
};

const StyledMatches = styled.div``;

const Matches = () => (
  <StyledMatches>
    <h2>Matches</h2>

    <ErrorBoundary context="database">
      <MatchList />
    </ErrorBoundary>
  </StyledMatches>
);

export default Matches;
export { StyledMatches };
