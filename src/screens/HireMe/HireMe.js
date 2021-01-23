import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";

const StyledHireMe = styled.div`
  display: flex;
  min-height: 100vh;
`;

export function HireMe() {
  return (
    <StyledHireMe id="hireMe">
      <Title title={"Hire Me"} />
    </StyledHireMe>
  );
}
