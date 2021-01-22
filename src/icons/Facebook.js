import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 25px;
  height: 25px;
`;
function SvgFacebook(props) {
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
        d="M30.938 3.938H5.063c-.623 0-1.125.502-1.125 1.124v25.875c0 .623.502 1.125 1.124 1.125h25.875c.623 0 1.125-.502 1.125-1.124V5.063c0-.623-.502-1.125-1.124-1.125zm-3.249 8.208h-2.246c-1.762 0-2.103.837-2.103 2.068v2.71h4.205l-.549 4.244H23.34v10.895h-4.384V21.17H15.29v-4.247h3.666v-3.129c0-3.631 2.219-5.61 5.46-5.61 1.554 0 2.886.115 3.277.168v3.793h-.004z"
        fill="#000"
      />
    </StyledSvg>
  );
}

export default SvgFacebook;
