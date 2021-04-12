import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  text-align: center;
`;

const Form = (props) => (
  <StyledForm {...props} />
);

export default Form;
