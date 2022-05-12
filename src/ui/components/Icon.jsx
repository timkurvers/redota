import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.i``;

const Icon = (props) => {
  const {
    brand, className = '', name, title,
  } = props;
  const fqClassName = `${brand ? 'fab' : 'fas'} fa-${name} ${className}`;
  return <StyledIcon className={fqClassName} title={title} />;
};

export default Icon;
export { StyledIcon };
