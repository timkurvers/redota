import React from 'react';
import styled from 'styled-components';

const StyledPlayerName = styled.div`
  white-space: nowrap;
`;

const StyledTag = styled.span`
  color: #CCC;

  &:after {
    content: '.';
  }
`;

const StyledName = styled.span``;

const PlayerName = (props) => {
  const { player } = props;
  const { color, name, team } = player;
  const tag = team?.tag;

  return (
    <StyledPlayerName>
      {tag && <StyledTag>{tag}</StyledTag>}
      <StyledName style={{ color }}>{name}</StyledName>
    </StyledPlayerName>
  );
};

export default React.memo(PlayerName);
export { StyledPlayerName };
