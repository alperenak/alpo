import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";

const StyledAbout = styled.div`
  display: flex;
  min-height: 100vh;
`;

export function About() {
  return (
    <StyledAbout id="about">
      <Title title={"About"} />
    </StyledAbout>
  );
}
