import React from 'react';
import styled from 'styled-components';

const StyledPlayerColor = styled.div`
  height: 3px;
  border-bottom: 1px solid black;
`;

const PlayerColor = (props) => {
  const { color } = props;
  return (
    <StyledPlayerColor style={{ background: color }} />
  );
};

export default PlayerColor;
