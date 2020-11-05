import React from 'react';
import {
  HashRouter, Link, Route, Switch,
} from 'react-router-dom';

import { HomePage, MatchPage, PlayerPage } from './pages/index.js';

const Redota = () => (
  <HashRouter>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/matches/5630632565">Match #5630632565</Link></li>
        <li><Link to="/players/19265135">Player #19265135</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/matches/:id"><MatchPage /></Route>
      <Route path="/players/:id"><PlayerPage /></Route>
      <Route path="/"><HomePage /></Route>
    </Switch>
  </HashRouter>
);

export default Redota;
