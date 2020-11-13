import React from 'react';
import styled from 'styled-components';

const StyledMap = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
`;

const StyledOffset = styled.div`
  position: relative;

  & > img {
    position: relative;
    width: 4000px;
    height: 4000px;
    transform: translate(-50%, -50%);
  }
`;

const StyledWebPFallback = styled.div`
  width: 300px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  text-align: center;

  & p {
    margin: 10px 10px;
  }
`;

const Map = (props) => {
  const { children, style } = props;
  return (
    <StyledMap style={style}>
      <StyledOffset>
        <StyledWebPFallback>
          <p>Loading the Dota 2 map background...</p>
          <p>If it never loads, your browser may not support the WebP image format.</p>
          <p>¯\_(ツ)_/¯</p>
        </StyledWebPFallback>
        <img src="./images/map-7.27.webp" alt="Dota 2 map" />
        {children}
      </StyledOffset>
    </StyledMap>
  );
};

export default Map;
