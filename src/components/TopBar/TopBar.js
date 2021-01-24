import React from "react";
import styled from "styled-components";
import { Logo } from "../../icons/index";
import { fontSize, NavMenuTitles } from "../../helpers/allVariable";

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 5;
`;
const StyledNavMenu = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-around;
`;
const StyledNavMenuTitle = styled.div`
  font-size: ${fontSize.md};
  cursor: pointer;
  font-weight: 400;
`;
const StyledHireButton = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: white;
  width: 150px;
  cursor: pointer;
  height: 50px;
  font-size: ${fontSize.md};
  font-weight: 400;
`;
export default function TopBar() {
  return (
    <StyledTopBar>
      <Logo />
      <StyledNavMenu>
        <RenderMenuTitles />
      </StyledNavMenu>
      <StyledHireButton onClick={() => (window.location.href = "#hireMe")}>
        Hire Me
      </StyledHireButton>
    </StyledTopBar>
  );
}
function RenderMenuTitles() {
  return NavMenuTitles.map((item) => {
    return (
      <StyledNavMenuTitle onClick={item.onClick}>
        {item.title}
      </StyledNavMenuTitle>
    );
  });
}
