import React from 'react';
import styled from 'styled-components';

import { HStack } from '../../components/index.js';

import Clock from './Clock.jsx';
import HeroList from './HeroList.jsx';
import Score from './Score.jsx';
import { TEAM_DIRE, TEAM_RADIANT } from '../../constants.js';

const StyledTopbar = styled(HStack)`
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
`;

const Topbar = (props) => {
  const { heroes, setSelection, time } = props;

  // TODO: Render topbar based on game state, not whether heroes are present
  if (!heroes.length) {
    return null;
  }

  // TODO: Does not work properly for illusion heroes
  const radiant = heroes.filter((h) => h.team === TEAM_RADIANT);
  const dire = heroes.filter((h) => h.team === TEAM_DIRE);

  return (
    <StyledTopbar>
      <HeroList heroes={radiant} setSelection={setSelection} />
      <Score value="?" />
      <Clock time={time} />
      <Score value="?" />
      <HeroList heroes={dire} setSelection={setSelection} />
    </StyledTopbar>
  );
};

export default Topbar;
