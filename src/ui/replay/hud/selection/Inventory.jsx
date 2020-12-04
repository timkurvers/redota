import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  DeathFilter, ItemSlot, ItemSlotCollection, VStack,
} from '../../../components/index.js';

const StyledInventory = styled(VStack)`
  position: relative;
  align-content: flex-start;
  width: 180px;
  padding-right: 50px;
`;

const StyledNeutralItem = styled.div`
  position: absolute;
  top: 30px;
  right: 6px;
`;

const StyledTeleportScroll = styled.div`
  position: absolute;
  top: 112px;
  right: 6px;
`;

const Inventory = observer((props) => {
  const {
    backpack, inventory, neutralItem, teleportScroll,
  } = props;
  return (
    <StyledInventory>
      <ItemSlotCollection items={inventory} wrap />
      {backpack && (
        <DeathFilter isDead>
          <ItemSlotCollection items={backpack} />
        </DeathFilter>
      )}
      <StyledNeutralItem>
        <ItemSlot item={neutralItem} rounded />
      </StyledNeutralItem>
      <StyledTeleportScroll>
        <ItemSlot item={teleportScroll} rounded />
      </StyledTeleportScroll>
    </StyledInventory>
  );
});

export default React.memo(Inventory);
export { StyledInventory };
