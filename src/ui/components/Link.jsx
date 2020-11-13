import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)`
  color: #C22E1F;

  &:hover {
    color: #FF1700;
  }
`;

const Link = (props) => {
  const { children, to } = props;
  const external = to.startsWith('http');
  if (external) {
    return (
      <StyledLink as="a" href={to}>{children}</StyledLink>
    );
  }
  return <StyledLink {...props} />;
};

export default Link;
