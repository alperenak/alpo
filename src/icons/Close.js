import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 15px;
  height: 15px;
  fill: red;
  color: red;
`;
function SvgClose(props) {
  return (
    <StyledSvg
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.08 17.998L30.629 5.426a.32.32 0 00-.245-.526h-3.207a.655.655 0 00-.494.229l-8.698 10.37-8.7-10.37a.642.642 0 00-.493-.23H5.584a.32.32 0 00-.245.527l10.547 12.572L5.34 30.57a.32.32 0 00.245.526h3.207c.189 0 .37-.084.494-.229l8.699-10.37 8.698 10.37c.12.145.302.23.494.23h3.207a.32.32 0 00.245-.527L20.08 17.998z"
        fill="red"
      />
    </StyledSvg>
  );
}

export default SvgClose;
