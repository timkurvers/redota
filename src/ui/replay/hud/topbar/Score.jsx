import React from 'react';
import styled from 'styled-components';

const StyledScore = styled.div`
  min-width: 50px;
  font-weight: bold;
  font-size: 1.1em;
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

export default React.memo(Score);
