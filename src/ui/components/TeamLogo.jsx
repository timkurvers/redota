import React from 'react';
import styled from 'styled-components';

import { StyledResource, TeamLogoResource } from './Resource.jsx';

const StyledTeamLogo = styled.div`
  padding: 0 10px;
  text-align: center;

  ${StyledResource} {
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
export { StyledTeamLogo };
