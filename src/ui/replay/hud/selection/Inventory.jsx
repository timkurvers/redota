/* eslint-disable react/no-array-index-key */

import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { HStack, ItemResource } from '../../../components/index.js';

const StyledItemSlot = styled.div`
  width: 50px;
  height: 38px;
  margin: 2px;
  border: 1px solid #333;
  background: black;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemSlot = observer((props) => {
  const { item } = props;
  return (
    <StyledItemSlot>
      {item && <ItemResource refname={item.refname} />}
    </StyledItemSlot>
  );
});

const StyledInventory = styled(HStack)`
  align-content: flex-start;
  width: 175px;
  margin: 3px;
`;

const Inventory = observer((props) => {
  const { items } = props;
  return (
    <StyledInventory wrap>
      {items.map((item, index) => (
        <ItemSlot key={index} item={item} />
      ))}
    </StyledInventory>
  );
});

export default React.memo(Inventory);
export { StyledInventory };
