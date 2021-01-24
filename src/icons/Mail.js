import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 25px;
  height: 25px;
`;
function SvgMail(props) {
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
        d="M32.625 5.625H3.375c-.622 0-1.125.503-1.125 1.125v22.5c0 .622.503 1.125 1.125 1.125h29.25c.622 0 1.125-.503 1.125-1.125V6.75c0-.622-.503-1.125-1.125-1.125zm-2.84 3.829l-11.092 8.63a.755.755 0 01-.932 0L6.666 9.454A.253.253 0 016.82 9h22.81a.253.253 0 01.154.454z"
        fill="#000"
      />
    </StyledSvg>
  );
}

export default SvgMail;
