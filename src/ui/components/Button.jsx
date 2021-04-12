import React from 'react';
import styled, { css } from 'styled-components';

import { HStack } from './Stack.jsx';

const StyledButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  ${(props) => props.fancy && css`
    background: #610606;
    box-shadow: inset 1px 1px 0 0 #B60A0A, inset -1px -1px 0 0 #410404;
    border-radius: 6px;
    padding: 6px 40px;
    font-family: 'Galdeano', sans-serif;
    text-shadow: 1px 1px 0 #942020, -1px -1px 1px #000000;

    ${!props.disabled && css`
      &:hover, &:focus {
        filter: saturate(125%);
      }
    `}
  `}

  ${(props) => props.disabled && css`
    filter: brightness(50%);
    cursor: not-allowed;
  `}
`;

const Button = (props) => {
  const { label, ...rest } = props;
  const accessibility = {};
  if (label) {
    accessibility['aria-label'] = label;
    accessibility.title = label;
  }
  return <StyledButton type="button" {...rest} {...accessibility} />;
};

const StyledButtonCollection = styled(HStack)`
  margin-top: .8125rem;

  ${StyledButton} {
    margin: 1em;
  }
`;

const ButtonCollection = (props) => (
  <StyledButtonCollection justify="center" {...props} />
);

export default Button;
export { ButtonCollection, StyledButton, StyledButtonCollection };
