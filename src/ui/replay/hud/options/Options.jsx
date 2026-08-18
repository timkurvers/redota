import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Dropdown } from '../../../components/index.js';
import { TEAM_DIRE, TEAM_RADIANT } from '../../../../lib/constants.js';

const StyledOptions = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
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
    cameraID, cameraMode, players, setCameraID, setCameraMode,
  } = props;

  const radiant = players.filter((p) => p.teamID === TEAM_RADIANT);
  const dire = players.filter((p) => p.teamID === TEAM_DIRE);
  const broadcasters = players.filter((p) => p.isBroadcaster);

  const onCameraChange = useCallback((e) => {
    setCameraID(+e.target.value);
  }, [setCameraID]);

  return (
    <StyledOptions>
      <Dropdown
        aria-label="Player camera"
        onChange={onCameraChange}
        value={cameraID}
      >
        <option value={-1}>Free camera</option>
        <CameraOptionGroup label="Radiant" players={radiant} />
        <CameraOptionGroup label="Dire" players={dire} />
        <CameraOptionGroup label="Broadcasters" players={broadcasters} />
      </Dropdown>
      {cameraID !== -1 && (
        <Dropdown
          aria-label="Player follow mode"
          onChange={(e) => setCameraMode(e.target.value)}
          value={cameraMode}
        >
          <option value="camera">Recorded camera</option>
          <option value="hero">Follow hero</option>
        </Dropdown>
      )}
    </StyledOptions>
  );
});

export default Options;
