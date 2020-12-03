import React from 'react';
import styled from 'styled-components';

import { TeamLogoResource } from './Resource.jsx';

const StyledTeamLogo = styled.div`
  width: 60px;
  text-align: center;

  img {
    max-width: 40px;
  }
`;

const TeamLogo = (props) => {
  const { teamID } = props;
  return (
    <StyledTeamLogo>
      <TeamLogoResource teamID={teamID} />
    </StyledTeamLogo>
  );
};

export default React.memo(TeamLogo);
