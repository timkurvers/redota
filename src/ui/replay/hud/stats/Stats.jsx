import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  Button, Dropdown, Form, Icon, StyledButton, StyledForm,
} from '../../../components/index.js';
import { useHotkey } from '../../../hooks/index.js';
import { composeComparisons, compareByProp } from '../../../../lib/utils/index.js';

import DisplayTable from './DisplayTable.jsx';
import ProgressTable from './ProgressTable.jsx';
import definitions from './definitions.js';

const StyledStats = styled.div`
  position: absolute;
  top: 54px;
  left: 10px;
  z-index: 6;

  ${StyledForm} {
    padding: 7px 7px;
    background: rgba(0, 0, 0, .5);
    margin-bottom: 6px;
  }

  ${StyledButton} {
    width: 30px;
  }
`;

// Compares given players by team ID ascending
const byTeamID = compareByProp('teamID');

const Stats = observer((props) => {
  const { players } = props;

  // Mode indicates how stats are displayed: collapsed, sorted or split
  const [mode, setMode] = useState('sorted');

  // Which stat is currently active
  const [statKey, setStatKey] = useState('lhd');
  const definition = definitions[statKey];

  // Cycles through the available modes based on the current mode
  const cycleMode = useCallback(() => {
    if (mode === 'collapsed') {
      setMode('sorted');
    } else if (mode === 'sorted') {
      setMode('split');
    } else if (mode === 'split') {
      setMode('collapsed');
    }
  }, [mode, setMode]);

  // Shows the given stat, cycling modes on subsequent requests
  const requestStat = useCallback((key) => {
    if (statKey === key) {
      cycleMode();
    } else {
      setStatKey(key);

      // Ensure the requested stat is shown when collapsed
      if (mode === 'collapsed') {
        setMode('sorted');
      }
    }
  }, [cycleMode, mode, statKey, setMode, setStatKey]);

  // Allow accessing stats through hotkeys
  for (const [key, { hotkey }] of Object.entries(definitions)) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useHotkey(`${hotkey}`, () => {
      requestStat(key);
    }, [requestStat]);
  }

  // Toggles between sorted and split stats
  useHotkey('S', () => {
    setMode(mode === 'sorted' ? 'split' : 'sorted');
  }, [mode, setMode]);

  // Collapses current stats
  useHotkey('A', () => {
    setMode('collapsed');
  }, [setMode]);

  const onChangeStat = useCallback((e) => {
    requestStat(e.target.value);
  }, [requestStat]);

  let table = null;
  if (mode !== 'collapsed') {
    // Ensure only players with heroes assigned are considered active
    const active = players.filter((p) => p.isPlayer && p.hero);

    // Sort players based on split and current stat semantics
    const split = mode === 'split';
    const sorted = Array.from(active).sort(
      composeComparisons(split ? byTeamID : null, definition.sort),
    );

    // Render a progress table for value-based stats, otherwise just a display table
    const Type = definition.value ? ProgressTable : DisplayTable;
    table = <Type definition={definition} players={sorted} />;
  }

  return (
    <StyledStats>
      <Form>
        <Dropdown onChange={onChangeStat} value={statKey}>
          {Object.entries(definitions).map(([key, { label, hotkey }]) => (
            <option key={key} value={key}>{label}{hotkey ? ` [${hotkey}]` : ''}</option>
          ))}
        </Dropdown>

        <Button onClick={cycleMode}>
          {mode === 'collapsed' && <Icon name="eye-slash" />}
          {mode === 'sorted' && <Icon name="sort-amount-down" />}
          {mode === 'split' && <Icon name="sort" />}
        </Button>
      </Form>

      {table}
    </StyledStats>
  );
});

export default Stats;
