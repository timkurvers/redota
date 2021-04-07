import React from 'react';
import styled from 'styled-components';

import { useDefaultTitle } from '../hooks/useTitle.jsx';

import ContentPage from './templates/ContentPage.jsx';
import Matches, { StyledMatches } from './main/Matches.jsx';
import Sidebar, { StyledSidebar } from './main/Sidebar.jsx';

const StyledDivider = styled.div`
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(151, 151, 151, 0) 0%, rgba(151, 151, 151, .15) 10%,
    rgba(151, 151, 151, .15) 90%, rgba(151, 151, 151, 0) 100%
  );
  margin: 0 20px;
`;

const StyledDashboard = styled.div``;

const StyledMainPage = styled(ContentPage)`
  @media screen and (min-width: 900px) {
    ${StyledDashboard} {
      display: flex;
      flex-direction: row-reverse;
    }

    ${StyledMatches} {
      width: 76%;
    }

    ${StyledSidebar} {
      width: 24%;
    }
  }
`;

const MainPage = (props) => {
  const { children } = props;

  useDefaultTitle();

  return (
    <StyledMainPage>
      <StyledDashboard>
        <Sidebar />
        <StyledDivider />
        <Matches />
      </StyledDashboard>

      {children}
    </StyledMainPage>
  );
};

export default MainPage;
