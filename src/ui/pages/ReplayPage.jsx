import React, { useState } from 'react';
import styled from 'styled-components';

import HUD from '../hud/HUD.jsx';
import World from '../world/World.jsx';
import fixtures from '../fixtures.js';
import { Link } from '../components/index.js';

const StyledQuitLink = styled(Link)`
  position: absolute;
  top: 12px;
  left: 15px;
  z-index: 5;
`;

const StyledReplayPage = styled.div`
  width: 100%;
  height: 100%;
  text-shadow: 1px 1px 1px black, -1px -1px 1px black;
`;

const ReplayPage = () => {
  const [entities, setEntities] = useState(fixtures.heroes);
  const [selectionId, setSelectionId] = useState(fixtures.selection);
  const selectedEntity = entities.find((e) => e.id === selectionId);
  const [tick, _setTick] = useState(fixtures.tick.start);
  const [focus, setFocus] = useState({ x: 0, y: 0 });

  const setSelection = (id) => {
    if (id === selectionId) {
      setFocus({ x: selectedEntity.x, y: selectedEntity.y });
    }
    setSelectionId(id);
  };

  const setTick = (t) => {
    _setTick(t);
    setEntities((es) => es.map((e) => ({
      ...e,
      hp: Math.random() * e.hpMax | 0,
      mp: Math.random() * e.mpMax | 0,
      x: e.x + Math.random() * 10 - 5,
      y: e.y + Math.random() * 10 - 5,
    })));
  };

  return (
    <StyledReplayPage>
      <StyledQuitLink to="/">Back to ReDota</StyledQuitLink>
      <HUD
        entities={entities}
        selectedEntity={selectedEntity}
        setSelection={setSelection}
        tick={tick}
        maxTick={fixtures.tick.max}
        setTick={setTick}
      />
      <World
        entities={entities}
        focus={focus}
        selectedEntity={selectedEntity}
        setSelection={setSelection}
      />
    </StyledReplayPage>
  );
};

export default ReplayPage;
