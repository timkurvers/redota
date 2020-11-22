/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Parser from '../../lib/parser/Parser.js';
import { Link } from '../components/index.js';

const StyledHomePage = styled.div`
  max-width: 560px;
  margin: 100px auto;
  background: rgba(0, 0, 0, .9);
  text-align: center;

  h2 {
    margin-top: 1.5em;
  }
`;

const StyledHighlight = styled.span`
  color: #FF1700;
`;

const StyledLegal = styled.p`
  opacity: .3;
  font-size: .75em;
  margin-top: 1.5em;
`;

const HomePage = () => {
  const history = useHistory();
  const [isReplayValid, setReplayValid] = useState(null);

  const dotabuff = <Link to="https://github.com/dotabuff/manta">Dotabuff</Link>;
  const opendota = <Link to="https://github.com/odota/parser">OpenDota</Link>;
  const skadistats = <Link to="https://github.com/skadistats/clarity">Skadistats</Link>;
  const github = <Link to="https://github.com/timkurvers/redota">GitHub</Link>;
  const example = (
    <Link to="http://replay308.valve.net/570/4986461644_1194860475.dem.bz2">
      Download and unzip replay of a pro-team match
    </Link>
  );

  const onReplaySelect = async (e) => {
    const file = e.target.files[0];
    let valid = null;
    if (file) {
      valid = await Parser.validate(file);
      if (valid) {
        const ref = URL.createObjectURL(file);
        const safeName = encodeURIComponent(file.name);
        const safeReplayURL = encodeURIComponent(ref);
        history.push(`/replay/${safeName}/${safeReplayURL}`);
        return;
      }
    }
    setReplayValid(valid);
  };

  return (
    <StyledHomePage>
      <h1>
        ↻Re
        <StyledHighlight>Dota</StyledHighlight>
      </h1>
      <p>
        This is an experiment to revisit past Dota 2 matches in the browser, fully
        relying on parsing replays client-side without any server involvement.
      </p>
      <p>
        Source is available on {github}. Contributions welcome!
      </p>
      <p>
        ReDota is a heavily derived project and stands on the shoulders of giants,
        notably parsers by {dotabuff}, {opendota} and {skadistats}.
      </p>
      <h2>Select replay file</h2>
      <p>
        <input type="file" onChange={onReplaySelect} accept=".dem" />
      </p>
      {isReplayValid === false && (
        <StyledHighlight as="p">
          The file you selected is not a valid Dota 2 replay file :(
        </StyledHighlight>
      )}
      <p>
        The replay file you select is never uploaded to any server. Real-time
        playback of replays can be taxing on your machine, but should be decently
        performant in latest versions of Mozilla Firefox and Google Chrome.
      </p>
      <p>
        Need a replay file? {example}.
      </p>
      <h2>Status</h2>
      <p>
        Currently, ReDota is capable of parsing replays and playing back in
        real time. It does not yet parse everything correctly though.
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
