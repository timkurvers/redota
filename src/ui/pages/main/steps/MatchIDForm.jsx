import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';

import Button from '../../../components/Button.jsx';
import Form from '../../../components/Form.jsx';
import Link from '../../../components/Link.jsx';
import Notice from '../../../components/Notice.jsx';

const StyledMatchIDForm = styled(Form)`
  // TODO: Refactor this into some generic text input component
  input {
    display: block;
    border: 0;
    border-radius: 4px;
    padding: 0.4em 0.8em;
    margin: .5em auto;
  }
`;

const MatchIDForm = (props) => {
  const { invalidate, next, prefill = '' } = props;

  const [matchID, setMatchID] = useState(prefill);

  const isValidMatchID = /^\d+$/.test(matchID);

  const onChange = useCallback((e) => {
    setMatchID(e.target.value);
    invalidate();
  }, [invalidate]);

  const onFindStart = useCallback(async (e) => {
    e.preventDefault();
    invalidate();
    next(+matchID);
  }, [invalidate, matchID, next]);

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  const opendota = <Link to="https://www.opendota.com">OpenDota</Link>;

  return (
    <StyledMatchIDForm onSubmit={onFindStart}>
      <input
        type="input"
        maxLength="15"
        onChange={onChange}
        pattern="\d+"
        placeholder="Match ID"
        ref={ref}
        required
        value={matchID}
      />

      <Button fancy type="submit" disabled={!isValidMatchID}>
        Search
      </Button>

      <Notice>
        <strong>Note:</strong> This will request match data from {opendota}.
      </Notice>
    </StyledMatchIDForm>
  );
};

export default MatchIDForm;
