import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  ActiveFilter, Cooldown, UnitOrHeroResource, StyledCooldownText,
} from '../../../components/index.js';

const StyledPortrait = styled.div`
  position: relative;
  width: 138px;
  cursor: pointer;

  img {
    width: 138px;
  }

  ${StyledCooldownText} {
    font-size: 2em;
  }
`;

const Portrait = observer((props) => {
  const { onClick, unit } = props;
  const { isDead, respawnCooldown } = unit;

  const resource = <UnitOrHeroResource unit={unit} variant="portrait" />;
  const children = respawnCooldown ? (
    <Cooldown remaining={respawnCooldown.remaining}>{resource}</Cooldown>
  ) : (
    <ActiveFilter active={!isDead}>{resource}</ActiveFilter>
  );
  return (
    <StyledPortrait onClick={onClick}>
      {children}
    </StyledPortrait>
  );
});

export default Portrait;
export { StyledPortrait };
