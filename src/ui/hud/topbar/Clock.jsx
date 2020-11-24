import React from 'react';
import styled from 'styled-components';

import { Time } from '../../components/index.js';

const StyledClock = styled(Time)`
  min-width: 70px;
  text-align: center;
`;

const Clock = (props) => (
  <StyledClock {...props} />
);

export default Clock;
