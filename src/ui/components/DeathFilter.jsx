import styled, { css } from 'styled-components';

const DeathFilter = styled.div`
  ${(props) => props.dead && css`
    opacity: 0.8;
    filter: grayscale(100%);
  `}
`;

export default DeathFilter;
