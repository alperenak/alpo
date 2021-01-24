import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
function SvgLeft(props) {
  return (
    <StyledSvg
      width="1em"
      height="1em"
      viewBox="0 0 47 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.192 27.99L33.84 48.816a.377.377 0 00.442.053.44.44 0 00.172-.175.517.517 0 00.063-.251v-4.572c0-.29-.121-.568-.32-.746L15.312 26.5 34.196 9.87a.987.987 0 00.32-.745V4.553c0-.396-.404-.615-.677-.372L10.192 25.008a1.865 1.865 0 00-.475.661c-.112.259-.17.542-.17.83 0 .287.058.57.17.83.111.257.274.484.475.66z"
        fill="#000"
      />
    </StyledSvg>
  );
}

export default SvgLeft;
