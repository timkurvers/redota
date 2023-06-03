import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Dropdown } from '../../../components/index.js';
import { TEAM_DIRE, TEAM_RADIANT } from '../../../../lib/constants.js';

const StyledOptions = styled.div`
  padding: 7px 7px;
  position: absolute;
  top: 54px;
  right: 10px;
  z-index: 6;
  background: rgba(0, 0, 0, .5);
  text-align: center;
`;

const CameraOptionGroup = observer((props) => {
  const { label, players } = props;
  if (!players.length) {
    return null;
  }

  return (
    <optgroup label={label}>
      {players.map((p) => (
        <option key={p.id} value={p.id}>{p.hero?.name || p.name}</option>
      ))}
    </optgroup>
  );
});

const Options = observer((props) => {
  const {
    cameraID, players, replay, setCameraID,
  } = props;
  const { patch } = replay;

  const radiant = players.filter((p) => p.teamID === TEAM_RADIANT);
  const dire = players.filter((p) => p.teamID === TEAM_DIRE);
  const broadcasters = players.filter((p) => p.isBroadcaster);

  const onCameraChange = useCallback((e) => {
    setCameraID(+e.target.value);
  }, [setCameraID]);

  const onMapSizeChange = useCallback((e) => {
    patch.map.size = +e.target.value;
  }, [patch]);

  const onMapOffsetXChange = useCallback((e) => {
    patch.map.backdrop.offset.x = +e.target.value;
  }, [patch]);

  const onMapOffsetYChange = useCallback((e) => {
    patch.map.backdrop.offset.y = +e.target.value;
  }, [patch]);

  return (
    <StyledOptions>
      <Dropdown onChange={onCameraChange} value={cameraID}>
        <option value={-1}>Free camera</option>
        <CameraOptionGroup label="Radiant" players={radiant} />
        <CameraOptionGroup label="Dire" players={dire} />
        <CameraOptionGroup label="Broadcasters" players={broadcasters} />
      </Dropdown>

      <hr />

      Map Size: {patch.map.size}

      <br />

      <input
        type="range"
        min={16000}
        max={20000}
        step={1}
        value={patch.map.size}
        onChange={onMapSizeChange}
      />

      <br />

      Offset X: {patch.map.backdrop.offset.x}

      <br />

      <input
        type="range"
        min={-2}
        max={2}
        step={0.1}
        value={patch.map.backdrop.offset.x}
        onChange={onMapOffsetXChange}
      />

      <br />

      Offset Y: {patch.map.backdrop.offset.y}

      <br />

      <input
        type="range"
        min={-2}
        max={2}
        step={0.1}
        value={patch.map.backdrop.offset.y}
        onChange={onMapOffsetYChange}
      />
    </StyledOptions>
  );
});

export default Options;
