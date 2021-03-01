import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { HeroResource } from '../../../components/index.js';
import { Hero } from '../../../../lib/replay/entities/index.js';

const StyledUnit = styled.div`
  width: 25px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  pointer-events: none;

  img {
    display: block;
  }
`;

const Unit = observer((props) => {
  const { selected, unit } = props;
  const { isDead, position: { relX, relY } } = unit;
  const isHero = unit instanceof Hero;

  if (isDead) {
    return null;
  }

  return (
    <StyledUnit
      selected={selected}
      style={{ left: `${relX * 100}%`, bottom: `${relY * 100}%` }}
    >
      {isHero && (
        <HeroResource refname={unit.refname} variant="icon" />
      )}
    </StyledUnit>
  );
});

export default Unit;
export { StyledUnit };
