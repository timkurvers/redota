import React from 'react';

const Icon = (props) => {
  const { brand, name, title } = props;
  const className = `${brand ? 'fab' : 'fas'} fa-${name}`;
  return <i className={className} title={title} />;
};

export default Icon;
