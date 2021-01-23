import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";

const StyledWorks = styled.div`
  display: flex;
  min-height: 100vh;
`;

export function Works() {
  return (
    <StyledWorks id="works">
      <Title title={"Works"} />
    </StyledWorks>
  );
}
