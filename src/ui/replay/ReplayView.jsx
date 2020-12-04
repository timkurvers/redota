import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Link } from '../components/index.js';
import { useReplayController } from '../hooks/index.js';

import HUD, { Selection, Timeline, Topbar } from './hud/HUD.jsx';
import Unit from './world/Unit.jsx';
import World from './world/World.jsx';

const StyledQuitLink = styled(Link)`
  position: absolute;
  top: 12px;
  left: 15px;
  z-index: 5;
`;

const StyledReplayView = styled.div`
  width: 100%;
  height: 100%;
  text-shadow: 1px 1px 1px black, -1px -1px 1px black;
`;

const ReplayView = observer(({ replay }) => {
  const {
    focus,
    playing,
    requestTick,
    selectedUnit,
    setPlaying,
    setSelection,
  } = useReplayController(replay);

  const onUnitClick = useCallback((id) => {
    setSelection(id);
  }, [setSelection]);

  return (
    <StyledReplayView>
      <StyledQuitLink to="/">Back to ReDota</StyledQuitLink>
      <HUD>
        {selectedUnit && (
          <Selection
            key={selectedUnit.handle}
            selectedUnit={selectedUnit}
            setSelection={setSelection}
          />
        )}
        <Timeline
          playing={playing}
          setPlaying={setPlaying}
          tick={replay.tick}
          lastTick={replay.lastTick}
          requestTick={requestTick}
        />
        <Topbar
          teams={replay.teams}
          setSelection={setSelection}
          time={replay.time}
        />
      </HUD>
      <World focus={focus}>
        {replay.units.map((unit) => (
          <Unit
            key={unit.handle}
            unit={unit}
            selected={selectedUnit === unit}
            onClick={onUnitClick}
          />
        ))}
      </World>
    </StyledReplayView>
  );
});

export default ReplayView;
