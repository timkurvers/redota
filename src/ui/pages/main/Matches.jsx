import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Button, { ButtonCollection } from '../../components/Button.jsx';
import ErrorBoundary from '../../components/ErrorBoundary.jsx';
import Icon from '../../components/Icon.jsx';
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

  const actions = (
    <ButtonCollection>
      <Button fancy onClick={openFindMatchModal}>
        Find replay by match ID
      </Button>

      <Button fancy onClick={openSelectReplayModal}>
        Select local replay file
      </Button>
    </ButtonCollection>
  );

  return (
    <>
      {!isLoading && !matches.length && (
        <Notice kind="instructions">
          Get started with ReDota by {searching}.
        </Notice>
      )}

      <Notice kind="warning">
        <Icon name="exclamation-triangle" /> ReDota currently uses the 7.23 map as a background.
        <br />
        Games played on patch 7.29 or later may consequently look odd.
      </Notice>

      {!isLoading && matches.length > 5 && (
        actions
      )}

      {!isLoading && matches.map((match) => (
        <Match key={match.uuid} match={match} />
      ))}

      {actions}

      {usage > 0 && (
        <>
          <p>
            The above replays take up approximately <strong>{usage} MB</strong> of storage space
            in your browser. Use the trash cans to get rid of unwanted replays.
          </p>

          <p>
            <strong>Note:</strong> Your browser may perform house keeping and remove replay data.
            Keep a copy if you need them.
          </p>
        </>
      )}
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
