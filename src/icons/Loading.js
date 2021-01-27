import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 36px;
  height: 36px;
`;
function SvgLoading(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        marginLeft: 8,
        background: "none",
      }}
      width="1em"
      height="1em"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        r={32}
        strokeWidth={3}
        stroke="#000"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1.639344262295082s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r={28}
        strokeWidth={3}
        stroke="#c4c4c4"
        strokeDasharray="43.982297150257104 43.982297150257104"
        strokeDashoffset={43.982}
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1.639344262295082s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
        />
      </circle>
    </StyledSvg>
  );
}

export default SvgLoading;
