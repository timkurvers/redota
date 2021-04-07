import React from 'react';
import styled from 'styled-components';

import ContentPage from './templates/ContentPage.jsx';

import useTitle from '../hooks/useTitle.jsx';

const StyledNotFoundPage = styled(ContentPage)`
  text-align: center;
`;

const NotFoundPage = () => {
  useTitle('404');

  return (
    <StyledNotFoundPage>
      <h2>404 Not Found</h2>
      <p>
        Exist, this page does not.
      </p>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
