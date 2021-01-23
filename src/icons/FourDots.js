import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  height: 100px;
`;
function SvgFourDots(props) {
  return (
    <StyledSvg
      width="1em"
      height="1em"
      viewBox="0 0 20 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={10} cy={10} r={10} fill="#000" />
      <circle cx={10} cy={40} r={10} fill="#000" />
      <circle cx={10} cy={70} r={10} fill="#000" />
      <circle cx={10} cy={100} r={10} fill="#000" />
    </StyledSvg>
  );
}

export default SvgFourDots;
