import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useInterval from "../../Hooks/UseInterval/useInterval";
const circle = {
  r: 70,
};
const circleArround = 2 * Math.PI * circle.r;
const animationDuration = 4;
const StyledPercent = styled.div`
  font-weight: bold;
  position: absolute;
  bottom: 25px;
`;
export default function CircleProgress({ percent, title, icon }) {
  const StyledCircleProgress = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    position: relative;
  `;
  const animationCircle = keyframes`

100% {
stroke-dashoffset: ${returnPercentValue(circleArround, percent)};
}
`;
  const StyledCircleSvg = styled.svg`
    transform: rotate(-90deg);
    width: 160px;
    height: 160px;
  `;
  const StyledCircle = styled.circle`
    fill: transparent;
    stroke: black;
    stroke-width: 10;
    stroke-linecap: round;
    stroke-dasharray: ${circleArround};
    stroke-dashoffset: ${circleArround};
    animation: ${animationCircle} ${returnDuration(percent, animationDuration)}s
      ease-in-out;

    animation-fill-mode: forwards;
  `;
  const StyledCircleBackgroundSvg = styled.svg`
    transform: rotate(-90deg);
    width: 160px;
    height: 160px;
    position: absolute;
    z-index: -1;
  `;
  const StyledCircleBackground = styled.circle`
    fill: transparent;
    stroke: #eaeaea;
    stroke-width: 10;
    stroke-linecap: round;
    stroke-dasharray: ${circleArround};
    stroke-dashoffset: 0;
  `;
  const StyledPercentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    position: absolute;
    height: 160px;
    flex-direction: column;
    position: absolute;
  `;

  const StyledIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35px;
  `;
  const StyledIconName = styled.div`
    display: flex;
    position: absolute;
    bottom: 50px;
  `;

  return (
    <StyledCircleProgress>
      <StyledPercentWrapper>
        <StyledIconWrapper>{icon}</StyledIconWrapper>
        <StyledIconName>{title}</StyledIconName>
        <RenderPercent percent={percent} />
      </StyledPercentWrapper>
      <StyledCircleSvg>
        <StyledCircle cx="80" cy="80" r="70"></StyledCircle>
      </StyledCircleSvg>
      <StyledCircleBackgroundSvg>
        <StyledCircleBackground cx="80" cy="80" r="70"></StyledCircleBackground>
      </StyledCircleBackgroundSvg>
    </StyledCircleProgress>
  );
}

function returnPercentValue(fullValue, percent) {
  return fullValue - fullValue * (percent / 100);
}
function returnDuration(percent, duration) {
  return (percent * duration) / 100;
}
function RenderPercent({ percent }) {
  const [percentValue, setPercentValue] = useState(0);
  useInterval(() => {
    if (percentValue !== percent) setPercentValue(percentValue + 1);
  }, -5 + (returnDuration(percent, animationDuration) * 1000) / percent);
  return <StyledPercent>{percentValue}%</StyledPercent>;
}
