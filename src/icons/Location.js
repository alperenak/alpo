import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 25px;
  height: 25px;
`;
function SvgLocation(props) {
  return (
    <StyledSvg
      width="1em"
      height="1em"
      viewBox="0 0 28 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#location_svg__clip0)">
        <path
          d="M12.561 36.254C1.967 21.032 0 19.469 0 13.875 0 6.212 6.268 0 14 0s14 6.212 14 13.875c0 5.594-1.967 7.157-12.561 22.379a1.76 1.76 0 01-2.878 0zM14 19.656c3.222 0 5.833-2.588 5.833-5.781 0-3.193-2.611-5.781-5.833-5.781s-5.833 2.588-5.833 5.781c0 3.193 2.611 5.781 5.833 5.781z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="location_svg__clip0">
          <path fill="#fff" d="M0 0h28v37H0z" />
        </clipPath>
      </defs>
    </StyledSvg>
  );
}

export default SvgLocation;
