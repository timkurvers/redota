import styled, { css } from 'styled-components';

const ActiveFilter = styled.div`
  ${(props) => !props.active && css`
    filter: grayscale(100%) brightness(80%);

    ${props.translucentWhenInactive && css`
      opacity: 0.8;
    `}
  `}
`;

export default ActiveFilter;
