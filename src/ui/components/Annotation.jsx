import React from 'react';
import styled, { css } from 'styled-components';

const StyledAnnotation = styled.div`
  position: absolute;
  bottom: 1px;
  right: 4px;
  font-size: 0.85em;
  pointer-events: none;

  ${(props) => props.type === 'health' && css`
    left: 4px;
    right: initial;
    color: #FF1A1A;
  `}

  ${(props) => props.type === 'mana' && css`
    color: #65D9F7;
  `}
`;

const Annotation = (props) => {
  const { type, value } = props;
  return (
    <StyledAnnotation type={type}>
      {value}
    </StyledAnnotation>
  );
};

export default Annotation;
