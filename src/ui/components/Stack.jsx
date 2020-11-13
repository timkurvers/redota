import styled, { css } from 'styled-components';

const Stack = styled.div.withConfig({
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

const HStack = Stack;

const VStack = styled(Stack)`
  flex-direction: column;
`;

export default Stack;
export { VStack, HStack };
