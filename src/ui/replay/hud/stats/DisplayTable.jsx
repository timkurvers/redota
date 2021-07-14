import React from 'react';
import { observer } from 'mobx-react-lite';

import PlayerEntry from './PlayerEntry.jsx';

const DisplayTable = observer((props) => {
  const { definition, players } = props;
  return players.map((player) => (
    <PlayerEntry key={player.id} player={player}>
      {definition.renderer(player)}
    </PlayerEntry>
  ));
});

export default DisplayTable;
