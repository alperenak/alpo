import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 25px;
  height: 25px;
`;
function SvgTwitter(props) {
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
        d="M34.714 7.647a13.74 13.74 0 01-3.946 1.06 6.834 6.834 0 003.014-3.776 13.526 13.526 0 01-4.348 1.656 6.835 6.835 0 00-5.006-2.166 6.85 6.85 0 00-6.85 6.854c0 .53.064 1.061.168 1.571A19.47 19.47 0 013.62 5.674a6.803 6.803 0 00-.932 3.46 6.855 6.855 0 003.054 5.71 6.91 6.91 0 01-3.098-.873v.085a6.853 6.853 0 005.492 6.726 7.258 7.258 0 01-1.804.233c-.446 0-.867-.045-1.293-.105a6.864 6.864 0 006.404 4.753 13.731 13.731 0 01-8.506 2.93c-.574 0-1.105-.02-1.655-.085a19.4 19.4 0 0010.523 3.074c12.6 0 19.494-10.439 19.494-19.5 0-.296 0-.594-.02-.891a14.755 14.755 0 003.436-3.544z"
        fill="#000"
      />
    </StyledSvg>
  );
}

export default SvgTwitter;
