import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';

import { useWindowDimensions } from '../../hooks/index.js';

import Map from './Map.jsx';
import Unit from './Unit.jsx';

const StyledWorld = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  background-image:
    linear-gradient(45deg, #222 25%, transparent 25%),
    linear-gradient(-45deg, #222 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #222 75%),
    linear-gradient(-45deg, transparent 75%, #222 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  cursor: ${(props) => (props.dragging ? 'grabbing' : 'grab')};
`;

const World = (props) => {
  const {
    camera, isFreeCamera, selectedUnit, setFreeCamera, setSelection, units,
  } = props;

  const [dragging, setDragging] = useState(false);

  const mapRef = useRef(null);

  // Ensure free camera is updated when window dimensions change
  const [viewport] = useWindowDimensions();
  useEffect(() => {
    const width = mapRef.current?.width;
    const height = mapRef.current?.height;
    setFreeCamera((current) => ({
      ...current,
      width: width ? viewport.width / width : 0,
      height: height ? viewport.height / height : 0,
    }));
  }, [setFreeCamera, viewport]);

  const onMouseDown = useCallback((e) => {
    e.preventDefault();
    if (!isFreeCamera) return;
    setDragging(true);
  }, [isFreeCamera, setDragging]);

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
      relX: current.relX + (-dx / width),
      relY: current.relY + (dy / height),
    }));
  }, [dragging, isFreeCamera, setFreeCamera]);

  const { relX, relY } = camera;
  return (
    <StyledWorld
      dragging={dragging}
      onDoubleClick={(e) => e.preventDefault()}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <Map
        ref={mapRef}
        style={{ transform: `translate(${-relX * 100}%, ${relY * 100}%)` }}
      >
        {units.map((unit) => (
          <Unit
            key={unit.handle}
            unit={unit}
            selected={selectedUnit === unit}
            onClick={setSelection}
          />
        ))}
      </Map>
    </StyledWorld>
  );
};

export default World;
