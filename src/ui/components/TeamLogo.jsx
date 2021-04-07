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
  const { alt, teamID } = props;
  return (
    <StyledTeamLogo>
      <TeamLogoResource alt={alt} teamID={teamID} />
    </StyledTeamLogo>
  );
};

export default React.memo(TeamLogo);
