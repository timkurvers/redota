import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { HStack, TeamLogo } from '../../../components/index.js';
import { TEAM_DIRE, TEAM_RADIANT } from '../../../../lib/constants.js';

import Clock from './Clock.jsx';
import HeroList from './HeroList.jsx';
import Score from './Score.jsx';

const StyledTopbar = styled(HStack)`
  align-items: center;
  min-height: 46px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
`;

const Topbar = observer((props) => {
  const { game: { clockTime }, setSelection, teams } = props;

  const radiant = teams.byID.get(TEAM_RADIANT);
  const dire = teams.byID.get(TEAM_DIRE);
  if (!radiant || !dire) {
    return null;
  }

  return (
    <StyledTopbar>
      {radiant.isProTeam && <TeamLogo alt={radiant.name} teamID={radiant.proID} />}
      <HeroList heroes={radiant.heroes} setSelection={setSelection} />
      <Score value={radiant.kills} />
      <Clock time={clockTime} />
      <Score value={dire.kills} />
      <HeroList heroes={dire.heroes} setSelection={setSelection} />
      {dire.isProTeam && <TeamLogo alt={dire.name} teamID={dire.proID} />}
    </StyledTopbar>
  );
});

export default Topbar;
