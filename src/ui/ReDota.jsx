import React from 'react';
import loadable from '@loadable/component';
import styled from 'styled-components';
import { HashRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// TODO: Need loaders here in case fetching the parser bundle is slow?
const MatchPage = loadable(() => (
  import(/* webpackChunkName: 'parser+viewer' */ './pages/MatchPage.jsx')
));

const FindMatchModal = loadable(() => (
  import(/* webpackChunkName: 'parser+viewer' */ './pages/main/modals/FindMatchModal.jsx')
));

const SelectReplayModal = loadable(() => (
  import(/* webpackChunkName: 'parser+viewer' */ './pages/main/modals/SelectReplayModal.jsx')
));

const StyledReDota = styled.div`
  box-sizing: content-box;
  letter-spacing: 0.5px;
`;

const ReDota = () => (
  <StyledReDota>
    <HashRouter>
      <Switch>
        <Route exact path={['/', '/matches', '/matches/find', '/matches/select']}>
          <MainPage>
            <Route path="/matches/find">
              <FindMatchModal />
            </Route>

            <Route path="/matches/select">
              <SelectReplayModal />
            </Route>
          </MainPage>
        </Route>

        <Route path="/matches/:id">
          <MatchPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </HashRouter>
  </StyledReDota>
);

export default ReDota;
