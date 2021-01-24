import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 25px;
  height: 25px;
`;
function SvgPhone(props) {
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
        d="M31.134 8.093l-3.744-3.74a2.842 2.842 0 00-2.014-.837c-.763 0-1.48.298-2.018.836l-4.03 4.03a2.843 2.843 0 00-.836 2.014c0 .763.299 1.48.837 2.018l2.946 2.946a13.846 13.846 0 01-2.83 4.081 13.898 13.898 0 01-4.082 2.841l-2.946-2.946a2.843 2.843 0 00-2.014-.837c-.763 0-1.48.299-2.018.837L4.352 23.36a2.843 2.843 0 00-.836 2.018c0 .763.298 1.48.836 2.018l3.737 3.737a4.62 4.62 0 003.26 1.35c.256 0 .502-.02.745-.063 4.739-.78 9.44-3.301 13.232-7.09 3.79-3.787 6.308-8.484 7.099-13.237a4.627 4.627 0 00-1.29-4.001z"
        fill="#000"
      />
    </StyledSvg>
  );
}

export default SvgPhone;
