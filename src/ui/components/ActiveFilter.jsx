import styled, { css } from 'styled-components';

const ActiveFilter = styled.div`
  ${(props) => !props.active && css`
    opacity: 0.8;
    filter: grayscale(100%);
  `}
`;

export default ActiveFilter;
