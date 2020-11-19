import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

import HUD from '../hud/HUD.jsx';
import Parser from '../../lib/parser/Parser.js';
import World from '../world/World.jsx';
import { TEAM_COLORS, PLAYER_COLORS } from '../constants.js';
import { Link } from '../components/index.js';
import { useInterval } from '../hooks/index.js';

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
  const history = useHistory();
  const { safeReplayURL } = useParams();
  const replayURL = decodeURIComponent(safeReplayURL);

  const [replay, setReplay] = useState(null);
  const [tick, setTick] = useState(0);
  const [maxTick, setMaxTick] = useState(0);
  const [playing, setPlaying] = useState(false);

  const [time, setTime] = useState(0);
  const [entities, setEntities] = useState([]);
  const [selectionId, setSelectionId] = useState(null);
  const [focus, setFocus] = useState(null);

  const selectedEntity = entities.find((e) => e.id === selectionId);
  const heroes = entities.filter((e) => e.type === 'hero');

  const requestTick = useCallback((t) => {
    replay.seek(t, { silent: true });
  }, [replay]);

  const setSelection = useCallback((id) => {
    if (id === selectionId) {
      setFocus(selectedEntity);
    }
    setSelectionId(id);
  }, [setFocus, setSelectionId, selectedEntity, selectionId]);

  const onTick = useCallback((t) => {
    setTick(t);

    const game = replay.entities.find((e) => e.class.name === 'CDOTAGamerulesProxy');
    if (game) {
      // TODO: Handle game phase
      // const phase = game.get('m_pGameRules.m_nGameState');

      // TODO: Game time is incorrect, needs some adjustments
      setTime(game.get('m_pGameRules.m_fGameTime'));
    }

    // TODO: This handling of all entities is absolutely disastrous for performance
    // and bypasses any kind of optimizations React could apply :(
    const units = [];
    let players = 0;
    for (const e of replay.entities) {
      const unit = { id: e.index };

      const cls = e.class.name;
      if (cls.startsWith('CDOTA_Unit_Hero_')) {
        unit.type = 'hero';
        // TODO: Hero name should go via string tables
        unit.name = e.class.name.match(/CDOTA_Unit_Hero_(.+)/)[1].toLowerCase();

        // TODO: Look up player color through player
        unit.color = PLAYER_COLORS[++players];
      } else if (cls === 'CDOTA_Unit_Courier') {
        unit.type = 'courier';
      } else if (cls === 'CDOTA_Unit_Roshan') {
        unit.type = 'roshan';
      } else if (cls === 'CDOTA_BaseNPC_Creep_Lane' || cls === 'CDOTA_BaseNPC_Creep_Siege') {
        unit.type = 'creep';
      } else if (cls === 'CDOTA_BaseNPC_Creep_Neutral') {
        unit.type = 'neutral-creep';
      } else if (cls === 'CDOTA_NPC_Observer_Ward' || cls === 'CDOTA_NPC_Sentry_Ward') {
        unit.type = 'ward';
      } else if (cls === 'CDOTA_BaseNPC_Tower' || cls === 'CDOTA_BaseNPC_Barracks' || cls === 'CDOTA_BaseNPC_Fort') {
        unit.type = 'building';
      } else {
        continue;
      }

      unit.x = e.get('CBodyComponent.m_cellX') * 128 + e.get('CBodyComponent.m_vecX') - 16384;
      unit.y = e.get('CBodyComponent.m_cellY') * 128 + e.get('CBodyComponent.m_vecY') - 16384;
      unit.hp = e.get('m_iHealth');
      unit.hpMax = e.get('m_iMaxHealth');
      unit.mp = e.get('m_flMana');
      unit.mpMax = e.get('m_flMaxMana');
      unit.team = e.get('m_iTeamNum');
      unit.name = unit.name || unit.type;
      unit.color = unit.color || TEAM_COLORS[unit.team];
      units.push(unit);
    }

    setEntities(units);
  }, [replay]);

  useEffect(() => {
    const fetchReplay = async () => {
      let buffer = null;
      try {
        const res = await fetch(replayURL);
        buffer = await res.arrayBuffer();
      } catch (e) {
        // TODO: Blob objects expire on unload, so for now, redirect home
        history.push('/');
        return;
      }
      setReplay(new Parser(buffer));
    };
    fetchReplay();
  }, [history, replayURL]);

  useEffect(() => {
    if (!replay) return;

    setMaxTick(replay.lastTick);
    replay.start();
    replay.on('tick', onTick);
  }, [onTick, replay]);

  // TODO: Tick rate seems off, why?
  useInterval(() => {
    if (!replay) return;
    replay.step();
  }, playing ? 1000 / 16 : null);

  return (
    <StyledReplayPage>
      <StyledQuitLink to="/">Back to ReDota</StyledQuitLink>
      <HUD
        heroes={heroes}
        selectedEntity={selectedEntity}
        setSelection={setSelection}
        playing={playing}
        setPlaying={setPlaying}
        tick={tick}
        time={time}
        maxTick={maxTick}
        requestTick={requestTick}
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
