/* eslint-disable react/no-array-index-key */

import React from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import Annotation from './Annotation.jsx';
import Cooldown from './Cooldown.jsx';
import { HStack } from './Stack.jsx';
import { ItemResource } from './Resource.jsx';

const StyledItemSlot = styled.div`
  position: relative;
  width: 50px;
  height: 38px;
  border: 1px solid #333;
  border-color: #333 #444 #444 #333;
  background: black;

  img {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.rounded && css`
    width: 38px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 50px;
      transform: translate(-6px, 0);
    }
  `}
`;

const ItemSlot = observer((props) => {
  const { className, item, rounded = false } = props;
  return (
    <StyledItemSlot className={className} rounded={rounded}>
      {item && (
        <Cooldown remaining={item.cooldown}>
          {item.charges > 0 && (
            <Annotation value={item.charges} />
          )}
          {item.manaCost > 0 && (
            <Annotation type="mana" value={item.manaCost} />
          )}
          <ItemResource refname={item.refname} />
        </Cooldown>
      )}
    </StyledItemSlot>
  );
});

const StyledItemSlotCollection = styled(HStack)`
  align-content: flex-start;
  margin: 9px;

  ${StyledItemSlot} {
    margin: 1px;
  }
`;

const ItemSlotCollection = observer((props) => {
  const { items, wrap } = props;
  return (
    <StyledItemSlotCollection wrap={wrap}>
      {items.map((item, index) => (
        <ItemSlot key={index} item={item} />
      ))}
    </StyledItemSlotCollection>
  );
});

export default ItemSlot;
export { ItemSlotCollection, StyledItemSlot };
