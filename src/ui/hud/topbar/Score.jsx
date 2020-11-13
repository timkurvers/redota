import React from 'react';
import styled from 'styled-components';

const StyledScore = styled.div`
  font-weight: bold;
  min-width: 50px;
  text-align: center;
`;

const Score = (props) => {
  const { value } = props;
  return (
    <StyledScore>
      {value}
    </StyledScore>
  );
};

export default Score;
