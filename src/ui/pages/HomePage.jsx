/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import styled from 'styled-components';

import { Link } from '../components/index.js';

const StyledHomePage = styled.div`
  max-width: 560px;
  margin: 100px auto;
  background: rgba(0, 0, 0, .9);
  text-align: center;

  h1 span {
    color: #FF1700;
  }
`;

const StyledLegal = styled.p`
  opacity: .3;
  font-size: .75em;
`;

const HomePage = () => {
  const dotabuff = <Link to="https://github.com/dotabuff/manta">Dotabuff</Link>;
  const opendota = <Link to="https://github.com/odota/parser">OpenDota</Link>;
  const skadistats = <Link to="https://github.com/skadistats/clarity">Skadistats</Link>;
  return (
    <StyledHomePage>
      <h1>
        ↻Re
        <span>Dota</span>
      </h1>
      <p>
        This is an experiment to revisit past Dota 2 matches in the browser, fully
        relying on parsing replays client-side without any server involvement.
      </p>
      <p>
        ReDota is a heavily derived project and stands on the shoulders of giants,
        notably parsers by {dotabuff}, {opendota} and {skadistats}.
      </p>
      <h2>Status</h2>
      <p>
        Currently, ReDota is capable of parsing replays minimally, but cannot yet
        extract useful replay data required for playback.
      </p>
      <p>
        <Link to="/replay">See the static map viewer in action.</Link>
      </p>
      <StyledLegal>
        Dota 2 is a registered trademark of Valve Corporation.
        <br />
        Image resources, lore and other references are property of Valve Corporation.
        <br />
        The Dota 2 map background originates from Gamepedia.
      </StyledLegal>
    </StyledHomePage>
  );
};

export default HomePage;
