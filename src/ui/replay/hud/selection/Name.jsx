import React from 'react';
import styled from 'styled-components';

const StyledName = styled.div`
  color: #FFCC00;
  text-align: center;
  text-transform: uppercase;
`;

const Name = (props) => {
  const { children } = props;
  return (
    <StyledName>
      {children}
    </StyledName>
  );
};

export default React.memo(Name);
export { StyledName };
