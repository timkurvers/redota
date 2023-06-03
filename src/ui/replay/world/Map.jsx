import React from 'react';
import styled from 'styled-components';

// Due to Dota 2's Y coordinate being flipped compared to web coordinates most
// of this styling uses `bottom` as well as various flipped Y transforms.
const StyledMap = styled.div`
  position: absolute;
  // Adding an additional 8% to place the camera a bit higher up for comfort
  bottom: 58%;
  left: 50%;
`;

const StyledOffset = styled.div`
  position: relative;

  > img {
    position: relative;
    display: block;
  }
`;

const StyledWebPFallback = styled.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  text-align: center;

  p {
    margin: 10px 10px;
  }
`;

const Map = React.forwardRef((props, ref) => {
  const { children, patch, style } = props;
  const { map } = patch;
  return (
    <StyledMap style={style}>
      <StyledOffset>
        <StyledWebPFallback>
          <p>Loading the Dota 2 map background...</p>
          <p>If it never loads, your browser may not support the WebP image format.</p>
          <p>¯\_(ツ)_/¯</p>
        </StyledWebPFallback>

        <img
          ref={ref}
          src={`./images/map/${map.id}.webp`}
          alt={`Dota 2 map v${map.id}`}
          style={{
            transform: `translate(${-50 + map.backdrop.offset.x}%, ${50 + map.backdrop.offset.y}%)`,
            width: `${map.backdrop.size}px`,
            height: `${map.backdrop.size}px`,
          }}
        />

        {children}
      </StyledOffset>
    </StyledMap>
  );
});

export default Map;
