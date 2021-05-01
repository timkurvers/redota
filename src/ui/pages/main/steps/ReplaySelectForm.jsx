import React, { useCallback } from 'react';
import styled from 'styled-components';

import Form from '../../../components/Form.jsx';
import Icon from '../../../components/Icon.jsx';

const StyledLocations = styled.div`
  text-align: left;
  border-top: 1px solid rgba(125, 125, 125, .25);
  color: gray;

  p {
    margin-top: 1.5em;
  }

  pre {
    margin-left: 1.5em;
    font-size: .8em;
  }
`;

const ReplaySelectForm = (props) => {
  const { invalidate, next } = props;

  const onSelect = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      next(file);
    } else {
      invalidate();
    }
  }, [invalidate, next]);

  return (
    <Form>
      <input type="file" onChange={onSelect} accept=".dem,.bz2" />

      <p>
        <strong>Note:</strong> The replay file you select is never uploaded to any server.
      </p>

      <StyledLocations>
        <p>
          Where to find your local Dota 2 replay files?
        </p>

        <p>
          <Icon brand name="windows" /> Windows:
          <pre>
            C:\Program Files (x86)\Steam\SteamApps\common\dota 2 beta\dota\replays
          </pre>
        </p>

        <p>
          <Icon brand name="apple" /> macOS:
          <pre>
            ~/Library/Application Support/Steam/steamapps/common/dota 2 beta/game/dota/replays
          </pre>
        </p>

        <p>
          <Icon brand name="linux" /> Linux:
          <pre>
            ~/.local/share/Steam/steamapps/common/dota 2 beta/game/dota/replays
          </pre>
        </p>
      </StyledLocations>
    </Form>
  );
};

export default ReplaySelectForm;
