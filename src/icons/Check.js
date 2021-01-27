import * as React from "react";
import styled, { css } from "styled-components";

const StyledSvg = styled.svg`
  ${(props) => {
    return props.small
      ? css`
          width: 15px;
          height: 15px;
        `
      : css`
          width: 25px;
          height: 25px;
        `;
  }}
`;

function SvgCheck(props) {
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
        d="M34.073 5.063h-2.808c-.394 0-.768.18-1.009.49L13.691 26.538 5.747 16.473a1.286 1.286 0 00-1.008-.49H1.93a.32.32 0 00-.253.518l11.005 13.942a1.29 1.29 0 002.021 0L34.326 5.577a.318.318 0 00-.253-.514z"
        fill="#000"
      />
    </StyledSvg>
  );
}

export default SvgCheck;
