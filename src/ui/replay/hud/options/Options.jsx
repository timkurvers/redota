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

const StyledControl = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 3px 0;
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
    cameraID, players, setCameraID, setZoom, zoom,
  } = props;

  const radiant = players.filter((p) => p.teamID === TEAM_RADIANT);
  const dire = players.filter((p) => p.teamID === TEAM_DIRE);
  const broadcasters = players.filter((p) => p.isBroadcaster);

  const onCameraChange = useCallback((e) => {
    setCameraID(+e.target.value);
  }, [setCameraID]);

  const onZoomChange = useCallback((e) => {
    setZoom(+e.target.value);
  }, [setZoom]);

  return (
    <StyledOptions>
      <StyledControl>
        Camera
        <Dropdown aria-label="Camera" onChange={onCameraChange} value={cameraID}>
          <option value={-1}>Free camera</option>
          <CameraOptionGroup label="Radiant" players={radiant} />
          <CameraOptionGroup label="Dire" players={dire} />
          <CameraOptionGroup label="Broadcasters" players={broadcasters} />
        </Dropdown>
      </StyledControl>
      <StyledControl>
        Zoom
        <Dropdown aria-label="Zoom" onChange={onZoomChange} value={zoom}>
          <option value="1">100%</option>
          <option value="0.75">75%</option>
          <option value="0.5">50%</option>
        </Dropdown>
      </StyledControl>
    </StyledOptions>
  );
});

export default Options;
