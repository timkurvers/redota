/* eslint-disable no-regex-spaces */

import React from 'react';
import styled from 'styled-components';

import Link from './Link.jsx';

const StyledError = styled.div`
  display: block;
  position: relative;
  padding: 20px;
  border-radius: 5px;
  background: #820000;
  border: 1px solid #FF0000;
  color: #FFFFFF;
  text-shadow: 1px 1px 1px #000000;
  text-align: left;

  h3 {
    margin-top: 0;
  }

  details {
    margin-top: 1.5em;
  }

  summary {
    cursor: pointer;
  }

  pre {
    max-height: 15em;
    padding-left: 1.5em;
    overflow: auto;
    white-space: pre-wrap;
    font-size: .8rem;
    text-shadow: none;
  }
`;

const StyledErrorWrapper = styled.div`
  padding: 1.25em;
`;

const Error = (props) => {
  const { context, error } = props;

  const openissue = (
    <Link to="https://github.com/timkurvers/redota/issues" grayscale>open an issue</Link>
  );

  const { name, message } = error;
  const label = `${name ? `${name}: ` : ''}${message}\n`;

  // Normalize stack between V8-based browsers and Firefox/Safari
  let { stack } = error;
  if (stack) {
    if (stack.startsWith(label)) {
      stack = stack.replace(label, '');
    } else {
      stack = stack.replace(/^/gm, '    at ');
    }
  }

  return (
    <StyledErrorWrapper>
      <StyledError>
        <h3>Whoops, an error occurred!</h3>

        {context === 'database' && (
          <>
            <p>
              ReDota stores match and replay data in a local database in your browser and
              unfortunately something went wrong trying to access it.
            </p>
            <p>
              Please note that private / incognito mode is <strong>NOT</strong> supported in
              Mozilla Firefox and Safari as these browsers restrict access or lack features
              while in this mode.
            </p>
          </>
        )}

        <p>
          If you believe this to be a novel bug in ReDota, please {openissue}.
        </p>

        <details>
          <summary>Technical details</summary>
          <pre>
            {label}
            {stack}
          </pre>
        </details>
      </StyledError>
    </StyledErrorWrapper>
  );
};

export default Error;
