import React from 'react';
import styled from 'styled-components';

import Icon from '../../components/Icon.jsx';
import Link from '../../components/Link.jsx';

const StyledSidebar = styled.aside``;

const Sidebar = () => {
  const dotabuff = <Link to="https://github.com/dotabuff/manta">Dotabuff</Link>;
  const github = (
    <Link to="https://github.com/timkurvers/redota">
      <Icon brand name="github" /> GitHub
    </Link>
  );
  const moddota = <Link to="https://moddota.com">ModDota</Link>;
  const opendota = <Link to="https://www.opendota.com">OpenDota</Link>;
  const skadistats = <Link to="https://github.com/skadistats/clarity">Skadistats</Link>;

  return (
    <StyledSidebar>
      <h2>What is this?</h2>
      <p>
        An open-source experiment to revisit past Dota 2 matches in a web browser,
        visualizing the game as an interactive map.
      </p>
      <p>
        For bug reports, feedback and development of ReDota, visit the project on {github}.
      </p>

      <h2>Performance</h2>
      <p>
        Real-time playback of replays can be taxing on your machine, but should be
        performant in recent versions of modern browsers.
      </p>

      <h2>Attribution</h2>
      <p>
        ReDota is a heavily derived project and stands on the shoulders of giants,
        notably parsers by {dotabuff} and {skadistats}.
      </p>
      <p>
        Special thanks to community members from {opendota} and {moddota} who assisted
        in deciphering replay specifics.
      </p>
    </StyledSidebar>
  );
};

export default Sidebar;
export { StyledSidebar };
