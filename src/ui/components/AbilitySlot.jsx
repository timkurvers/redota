import React from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import Annotation from './Annotation.jsx';
import Cooldown from './Cooldown.jsx';
import { AbilityResource, StyledResource } from './Resource.jsx';

const StyledAbilitySlot = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border: 2px solid #333;
  border-color: #666 #444 #333 #555;
  outline: 1px solid #111;
  background: black;

  ${(props) => props.isPassive && css`
    width: 55px;
    height: 55px;
    margin-top: 4px;
    outline: none;
    border-width: 1px;
    border-color: #111 #333 #444 #111;
  `}

  ${(props) => !props.isTrained && css`
    border-color: #333;
  `}

  ${StyledResource} {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const AbilitySlot = observer((props) => {
  const { className, ability } = props;
  return (
    <StyledAbilitySlot
      className={className}
      isPassive={ability.isPassive}
      isTrained={ability.isTrained}
    >
      <Cooldown remaining={ability.cooldown.remaining}>
        {ability.healthCost > 0 && (
          <Annotation type="health" value={ability.healthCost} />
        )}
        {ability.manaCost > 0 && (
          <Annotation type="mana" value={ability.manaCost} />
        )}
        <AbilityResource name={ability.name} refname={ability.refname} />
      </Cooldown>
    </StyledAbilitySlot>
  );
});

export default AbilitySlot;
