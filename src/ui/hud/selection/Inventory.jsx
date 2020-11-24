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
  const { refname } = props;
  return (
    <StyledItem>
      <ItemResource refname={refname} />
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
      <Item refname="tranquil_boots" />
      <Item refname="rod_of_atos" />
      <Item refname="heavens_halberd" />
      <Item refname="heart" />
      <Item refname="octarine_core" />
      <Item refname="shivas_guard" />
      <Item refname="ward_dispenser" />
      <Item refname="gem" />
    </StyledInventory>
  );
};

export default Inventory;
export { StyledInventory };
