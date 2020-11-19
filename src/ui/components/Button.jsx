import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.25em;
`;

const Button = (props) => (
  <StyledButton type="button" {...props} />
);

export default Button;
