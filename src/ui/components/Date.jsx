import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.span`
  white-space: nowrap;
`;

const Date = (props) => {
  const { date } = props;
  if (!date) {
    return '-';
  }

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return (
    <StyledDate>
      {date.toLocaleString('en-US', options)}
    </StyledDate>
  );
};

export default Date;
