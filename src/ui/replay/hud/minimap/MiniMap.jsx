import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Hero } from '../../../../lib/replay/entities/index.js';

import Unit, { StyledUnit } from './Unit.jsx';

const StyledMiniMap = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, .5);
  border: 1px solid rgba(0, 0, 0, .5);
  border-left-color: black;
  border-bottom-color: black;
  border-top-right-radius: 15px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    z-index: 1;
  }

  ${StyledUnit} {
    z-index: 2;
  }
`;

const StyledOffset = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 100%;

  > img {
    display: block;
    transform: translate(-50%, 50%);
  }
`;

const StyledCamera = styled.div`
  position: absolute;
  z-index: 100;
  background: rgba(255, 255, 255, .45);
  pointer-events: none;
  transform: translate(-50%, 50%);
`;

const MiniMap = observer((props) => {
  const {
    camera, isFreeCamera, patch, selectedUnit, setFreeCamera, units,
  } = props;
  const { map } = patch;

  const [dragging, setDragging] = useState(false);

  const mapRef = useRef(null);

  const onMouseDown = useCallback((e) => {
    e.preventDefault();
    if (!isFreeCamera) return;
    setDragging(true);

    const { width, height } = mapRef.current;
    const rect = mapRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.x) - (width / 2);
    const relY = (e.clientY - rect.y) - (height / 2);
    setFreeCamera((current) => ({
      ...current,
      relX: relX / width,
      relY: -relY / height,
    }));
  }, [isFreeCamera, setFreeCamera]);

  const onMouseUp = useCallback((e) => {
    e.preventDefault();
    if (!isFreeCamera) return;
    setDragging(false);
  }, [isFreeCamera, setDragging]);

  const onMouseMove = useCallback((e) => {
    if (!isFreeCamera || !dragging) return;
    const { movementX: dx, movementY: dy } = e;
    const { width, height } = mapRef.current;
    setFreeCamera((current) => ({
      ...current,
      relX: current.relX + (dx / width),
      relY: current.relY + (-dy / height),
    }));
  }, [dragging, isFreeCamera, setFreeCamera]);

  // TODO: Minimap should preferably also show buildings, creep camps etc.
  const heroes = units.filter((u) => u instanceof Hero);

  return (
    <StyledMiniMap
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseUp}
    >
      <StyledOffset>
        <img
          ref={mapRef}
          src={`./images/minimap/${map.id}.webp`}
          draggable="false"
          alt={`Dota 2 minimap v${map.id}`}
        />
        <StyledCamera
          style={{
            left: `${camera.relX * 100}%`,
            bottom: `${camera.relY * 100}%`,
            width: `${camera.width * 100}%`,
            height: `${camera.height * 100}%`,
          }}
        />
        {heroes.map((unit) => (
          <Unit
            key={unit.handle}
            selected={selectedUnit === unit}
            unit={unit}
          />
        ))}
      </StyledOffset>
    </StyledMiniMap>
  );
});

export default MiniMap;
