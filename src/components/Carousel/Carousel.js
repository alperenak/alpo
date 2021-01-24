import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Left, Right } from "../../icons";

const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 400px;
  overflow: hidden;
`;

const StyledCardSection = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 748px;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  transition: all 1s ease-in-out;
  ${(props) => {
    return props.translateValue !== 0
      ? css`
          transform: translate(${props.translateValue}px, 0);
        `
      : "";
  }};
`;

export default function Carousel({ children }) {
  const [translateValue, setTranslateValue] = useState(0);
  const [itemCount, setitemCount] = useState(3);
  return (
    <StyledCarousel>
      <Left
        onClick={() => {
          if (translateValue !== 0) {
            setTranslateValue(translateValue + 374);
            setitemCount(itemCount - 1);
          }
        }}
      />
      <StyledCardSection>
        <StyledCardWrapper translateValue={translateValue}>
          {children}
        </StyledCardWrapper>
      </StyledCardSection>
      <Right
        onClick={() => {
          if (itemCount !== children.length + 1) {
            setTranslateValue(translateValue - 374);
            setitemCount(itemCount + 1);
          }
        }}
      />
    </StyledCarousel>
  );
}
