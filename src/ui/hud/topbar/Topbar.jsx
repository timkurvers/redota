import React from 'react';
import styled from 'styled-components';

import { HStack } from '../../components/index.js';

import Clock from './Clock.jsx';
import HeroList from './HeroList.jsx';
import Score from './Score.jsx';

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

  const radiant = heroes.slice(0, 5);
  const dire = heroes.slice(5);

  return (
    <StyledTopbar>
      <HeroList heroes={radiant} setSelection={setSelection} />
      <Score value="7" />
      <Clock time={time} />
      <Score value="1" />
      <HeroList heroes={dire} setSelection={setSelection} />
    </StyledTopbar>
  );
};

export default Topbar;
