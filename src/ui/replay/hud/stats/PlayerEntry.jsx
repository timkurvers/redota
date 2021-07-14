import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { HeroResource, HStack, StyledResource } from '../../../components/index.js';
import { TEAM_COLORS } from '../../../../lib/constants.js';

const StyledPlayerEntry = styled(HStack)`
  align-items: center;
  height: 28px;
  margin-top: 2px;

  ${StyledResource} {
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #000;
  }
`;

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  padding-left: 10px;
`;

const PlayerEntry = observer((props) => {
  const { children, player } = props;
  const { hero, teamID } = player;

  const color = TEAM_COLORS[teamID];
  const backgroundImage = `linear-gradient(to right, ${color}AA, ${color}00)`;

  return (
    <StyledPlayerEntry style={{ backgroundImage }}>
      <HeroResource refname={hero.refname} variant="landscape" />
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </StyledPlayerEntry>
  );
});

export default PlayerEntry;
