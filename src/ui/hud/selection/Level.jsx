import React from 'react';
import styled from 'styled-components';

const StyledLevel = styled.div`
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, .75);
  border: 2px solid #FFCC00;
  border-radius: 100px;
  color: #FFCC00;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
`;

const Level = (props) => {
  const { children } = props;
  return (
    <StyledLevel>
      {children}
    </StyledLevel>
  );
};

export default Level;
export { StyledLevel };
