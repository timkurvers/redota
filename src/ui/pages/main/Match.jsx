import React, { useCallback } from 'react';
import styled from 'styled-components';

import Button, { StyledButton } from '../../components/Button.jsx';
import Date from '../../components/Date.jsx';
import Icon from '../../components/Icon.jsx';
import Link from '../../components/Link.jsx';
import TeamLogo, { StyledTeamLogo } from '../../components/TeamLogo.jsx';
import Time from '../../components/Time.jsx';
import gameModesByID from '../../../lib/definitions/gameModesByID.js';
import { HeroResource, StyledResource } from '../../components/Resource.jsx';
import { HStack, VStack } from '../../components/Stack.jsx';
import { TEAM_DIRE, TEAM_RADIANT } from '../../../lib/constants.js';

const StyledMatch = styled(HStack)`
  padding: 12px 15px;
  background: rgba(255, 255, 255, .02);
  border-radius: 10px;
  margin: 6px 0;
  align-items: center;

  &:nth-child(2n) {
    background: rgba(255, 255, 255, .04);
  }

  &:hover {
    background: rgba(255, 255, 255, .06);
  }
`;

const StyledTeam = styled(HStack)`
  height: 26px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;

  ${StyledTeamLogo}, ${HStack} {
    height: 100%;
  }

  ${StyledResource} {
    height: 100%;
    margin-right: 2px;
    vertical-align: middle;
  }

  i + ${HStack} {
    margin-left: 10px;
  }

  & + & {
    margin-top: 2px;
  }
`;

const Team = (props) => {
  const { team, isWinner } = props;
  const { name, players, proID } = team;
  return (
    <StyledTeam>
      {isWinner && <Icon name="trophy" title="Winner" />}
      {proID > 0 && <TeamLogo alt={name} teamID={proID} />}
      <HStack>
        {players.map((player, index) => (
          <HeroResource
            key={player.hero || index}
            refname={player.hero}
            variant="landscape"
          />
        ))}
      </HStack>
    </StyledTeam>
  );
};

const StyledActions = styled(VStack)`
  border-left: 1px solid rgba(151, 151, 151, .15);
  margin-left: 18px;
  padding-left: 10px;

  ${StyledButton} {
    opacity: .5;
    padding: 5px 10px;

    &:hover, &:focus {
      opacity: 1;
    }
  }
`;

const StyledDuration = styled.div`
  min-width: 90px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const StyledInfo = styled(VStack)`
  flex-grow: 1;
`;

const StyledMeta = styled(HStack)``;

const StyledPatch = styled.div`
  opacity: .25;
  margin-left: .5em;
`;

const StyledTeams = styled(VStack)`
  min-width: 340px;
  min-height: 54px;
`;

const Match = (props) => {
  const { match, isPreview = false } = props;
  const {
    id, duration, endedAt, gameMode, label, patch, radiant, dire, winningTeamID,
  } = match;

  const download = useCallback(() => {
    const a = document.createElement('a');
    a.setAttribute('download', match.replay.filename);
    a.setAttribute('href', URL.createObjectURL(match.replay.blob));
    a.click();
  }, [match]);

  const remove = useCallback(() => {
    match.delete();
  }, [match]);

  return (
    <StyledMatch>
      <StyledInfo>
        {!isPreview && <Link to={`/matches/${id}`}>{label}</Link>}
        {gameModesByID[gameMode]?.name}
        <StyledMeta>
          <Date date={endedAt} />
          {patch && <StyledPatch>{patch.name}</StyledPatch>}
        </StyledMeta>
      </StyledInfo>

      <StyledDuration>
        <Time time={duration} />
      </StyledDuration>

      <StyledTeams justify="center">
        {radiant && <Team team={radiant} isWinner={winningTeamID === TEAM_RADIANT} />}
        {dire && <Team team={dire} isWinner={winningTeamID === TEAM_DIRE} />}
      </StyledTeams>

      {!isPreview && (
        <StyledActions>
          <Button onClick={download} label="Download replay">
            <Icon name="file-download" />
          </Button>

          <Button onClick={remove} label="Remove match">
            <Icon name="trash-alt" />
          </Button>
        </StyledActions>
      )}
    </StyledMatch>
  );
};

export default Match;
