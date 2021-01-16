import React from 'react';
import loadable from '@loadable/component';
import styled from 'styled-components';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';

// TODO: Need a loader here in case fetching the parser bundle is slow?
const ReplayPage = loadable(() => (
  import(/* webpackChunkName: 'parser+viewer' */ './pages/ReplayPage.jsx')
));

const StyledReDota = styled.div`
  box-sizing: content-box;
  font-family: 'Galdeano', sans-serif;
  letter-spacing: 0.5px;
`;

const ReDota = () => (
  <StyledReDota>
    <HashRouter>
      <Switch>
        <Route path="/replay/:safeFilename/:safeReplayURL"><ReplayPage /></Route>
        <Route path="/"><HomePage /></Route>
      </Switch>
    </HashRouter>
  </StyledReDota>
);

export default ReDota;
