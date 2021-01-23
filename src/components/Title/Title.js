import React from "react";
import styled from "styled-components";
import { fontSize } from "../../helpers/allVariable";
import { FourDots } from "../../icons";

const StyledTitlesSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledFourDotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const StyledTitle = styled.div`
  font-size: ${fontSize.lg};
  margin-left: 50px;
  margin-top: 10px;
  font-weight: 700;
`;
export default function Title({ title }) {
  return (
    <StyledTitlesSection>
      <StyledFourDotsWrapper>
        <FourDots />
      </StyledFourDotsWrapper>
      <StyledTitle>{title}</StyledTitle>
    </StyledTitlesSection>
  );
}
