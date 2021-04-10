import React from 'react';
import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)`
  color: #C22E1F;
  text-decoration: none;

  &:hover, &:focus {
    color: #FF1700;
  }

  ${(props) => props.grayscale && css`
    color: #CCC;
    border-bottom: 1px solid currentColor;

    &:hover, &:focus {
      color: #FFF;
    }
  `}
`;

const Link = (props) => {
  const { to } = props;
  const external = to.startsWith('http');
  if (external) {
    return (
      <StyledLink as="a" href={to} {...props} />
    );
  }
  return <StyledLink {...props} />;
};

export default React.memo(Link);
