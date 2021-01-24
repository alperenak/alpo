import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 48px;
  cursor: pointer;
  height: 48px;
`;
function SvgRight(props) {
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
        d="M36.808 25.01L13.16 4.184a.377.377 0 00-.442-.053.44.44 0 00-.172.175.517.517 0 00-.063.251v4.572c0 .29.121.568.32.746L31.688 26.5 12.804 43.13a.987.987 0 00-.32.745v4.573c0 .396.404.615.677.372l23.647-20.827c.2-.177.364-.403.475-.661a2.09 2.09 0 00.17-.83 2.09 2.09 0 00-.17-.83 1.865 1.865 0 00-.475-.66z"
        fill="#000"
      />
    </StyledSvg>
  );
}

export default SvgRight;
