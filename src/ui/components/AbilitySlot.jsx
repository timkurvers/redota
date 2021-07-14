import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import Annotation from './Annotation.jsx';
import Cooldown from './Cooldown.jsx';
import { AbilityResource, StyledResource } from './Resource.jsx';

const StyledAbilitySlot = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border: 2px solid #333;
  border-color: #444 #333 #333 #444;
  outline: 1px solid #111;
  background: black;

  ${StyledResource} {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const AbilitySlot = observer((props) => {
  const { className, ability } = props;
  return (
    <StyledAbilitySlot className={className}>
      {ability && (
        <Cooldown remaining={ability.cooldown.remaining}>
          {ability.manaCost > 0 && (
            <Annotation type="mana" value={ability.manaCost} />
          )}
          <AbilityResource refname={ability.refname} />
        </Cooldown>
      )}
    </StyledAbilitySlot>
  );
});

export default AbilitySlot;
