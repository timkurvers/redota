import React from 'react';
import styled from 'styled-components';

import Icon from '../../components/Icon.jsx';
import Link from '../../components/Link.jsx';
import Logo from '../../components/Logo.jsx';

const StyledContentPage = styled.div`
  position: relative;
  max-width: 1000px;
  padding: 0 64px;
  margin: 0 auto;
  text-shadow: 1px 1px 1px #000000;

  h1, h2 {
    margin-top: 1.5em;
    font-weight: normal;
    font-size: 1.625rem;
  }

  @media screen and (max-width: 1128px) {
    padding: 0 25px;
  }
`;

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: .5;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background:
      linear-gradient(to right, #0E0E0E 0%, rgba(14, 14, 14, 0.00) 10%, rgba(14, 14, 14, 0.00) 90%, #0E0E0E 100%),
      linear-gradient(to bottom, rgba(14, 14, 14, 0.00) 0%, #0E0E0E 82%);
  }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 2;
`;

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2.75em;

  h1, p {
    margin: 0;
  }

  p {
    font-family: 'Galdeano', sans-serif;
    font-size: 1.125rem;
    color: #D4D4D4;
    letter-spacing: 1.15px;
  }
`;

const StyledFooter = styled.div`
  opacity: .25;
  padding: 2em 0;
  text-align: center;

  p {
    font-size: .75rem;
  }
`;

const ContentPage = (props) => {
  const { children, className } = props;

  const attributions = (
    <Link to="https://github.com/timkurvers/redota/#legalese" grayscale>
      legal and resource attributions
    </Link>
  );

  return (
    <StyledContentPage>
      <StyledHeader>
        <Link to="/">
          <Logo />
        </Link>
        <p>
          Revisit past Dota 2 matches in the browser
        </p>
      </StyledHeader>

      <StyledBackdrop>
        <img src="./images/backdrop.jpg" alt="" />
      </StyledBackdrop>

      <StyledContent className={className}>
        {children}
      </StyledContent>

      <StyledFooter>
        <p>
          <strong>&copy;2020-2021 ReDota</strong>
        </p>
        <p>
          Dota 2 is a registered trademark of Valve Corporation.
          <br />
          Image resources, lore and other references are property of Valve Corporation.
        </p>
        <p>
          See additional {attributions} on <Icon brand name="github" /> GitHub.
        </p>
      </StyledFooter>
    </StyledContentPage>
  );
};

export default ContentPage;
