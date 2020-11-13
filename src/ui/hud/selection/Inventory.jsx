import React from 'react';
import styled from 'styled-components';

import { HStack, ItemResource } from '../../components/index.js';

const StyledItem = styled.div`
  margin: 2px;

  & img {
    width: 50px;
  }
`;

const Item = (props) => {
  const { name } = props;
  return (
    <StyledItem>
      <ItemResource name={name} />
    </StyledItem>
  );
};

const StyledInventory = styled(HStack)`
  width: 175px;
  margin: 4px;
`;

const Inventory = (props) => {
  const { hero } = props; // eslint-disable-line
  return (
    <StyledInventory justify="center" wrap>
      <Item name="tranquil_boots" />
      <Item name="rod_of_atos" />
      <Item name="heavens_halberd" />
      <Item name="heart" />
      <Item name="octarine_core" />
      <Item name="shivas_guard" />
      <Item name="ward_dispenser" />
      <Item name="gem" />
    </StyledInventory>
  );
};

export default Inventory;
export { StyledInventory };
