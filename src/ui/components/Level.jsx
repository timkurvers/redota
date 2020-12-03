import React from 'react';
import styled, { css } from 'styled-components';

import { xpPerLevel } from '../../lib/dotaconstants.js';

const StyledLevel = styled.div`
  position: relative;
  width: ${(props) => props.radius * 2}px;
  height: ${(props) => props.radius * 2}px;
  background: rgba(0, 0, 0, .75);
  border-radius: 50%;
  color: #FFCC00;
  font-weight: bold;
  text-align: center;
  line-height: 30px;

  & svg {
    transform: rotate(-90deg);
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    letter-spacing: 0px;

    ${(props) => props.size === 'small' && css`
      font-size: 0.7em;
    `}
  }
`;

// See: https://css-tricks.com/building-progress-ring-quickly/
const Level = (props) => {
  const {
    children: level,
    size = 'default',
    xp,
  } = props;

  let radius = 20;
  let stroke = 3;
  if (size === 'small') {
    radius = 10;
    stroke = 2;
  }

  const min = xpPerLevel[level - 1];
  const max = xpPerLevel[level];
  const pct = (xp - min) / (max - min);

  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (pct * circumference);

  return (
    <StyledLevel radius={radius} size={size}>
      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          stroke="#FFCC00"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span>{level}</span>
    </StyledLevel>
  );
};

export default React.memo(Level);
export { StyledLevel };
