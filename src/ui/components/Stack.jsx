import styled, { css } from 'styled-components';

const HStack = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'wrap',
})`
  display: flex;
  flex-direction: row;

  ${(props) => props.justify === 'center' && css`
    justify-content: center;
  `}

  ${(props) => props.wrap && css`
    flex-wrap: wrap;
  `}
`;

const VStack = styled(HStack)`
  flex-direction: column;
`;

export { VStack, HStack };
