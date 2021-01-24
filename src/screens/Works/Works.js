import React from "react";
import styled, { keyframes } from "styled-components";
import Carousel from "../../components/Carousel/Carousel";
import Title from "../../components/Title/Title";
import Soruio from "../../assets/images/soruio.png";
import { fontSize, WorksCardsData } from "../../helpers/allVariable";
const StyledWorks = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const TextAnimation = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;
const StyledCardBackgroundImageFilter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  border-radius: 25px;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.2);
`;
const StyledCardTitle = styled.div`
  display: none;
  animation: ${TextAnimation} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  font-weight: 400;
  color: white;
  z-index: 2;
  font-size: ${fontSize.sm};
  margin-left: 25px;
`;
const StyledCardDescription = styled.div`
  display: none;
  animation: ${TextAnimation} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  font-weight: 400;
  color: white;
  z-index: 2;
  font-size: ${fontSize.xSm};
  margin-bottom: 15px;
  margin-top: 10px;
  margin-left: 25px;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 324px;
  height: 200px;
  margin: 0 25px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  background-color: dimgray;
  overflow: hidden;
  &:hover {
    ${StyledCardBackgroundImageFilter} {
      background-color: rgba(0, 0, 0, 0.5);
    }
    ${StyledCardTitle} {
      display: block;
    }
    ${StyledCardDescription} {
      display: block;
    }
  }
`;
const StyledCardBackgroundImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export function Works() {
  return (
    <StyledWorks id="works">
      <Title title={"Works"} />
      <Carousel>
        {WorksCardsData.map((item) => {
          return (
            <RenderCard
              title={item.title}
              description={item.description}
              backgroundImage={item.src}
            />
          );
        })}
      </Carousel>
    </StyledWorks>
  );
}

function RenderCard({ backgroundImage, title, description }) {
  return (
    <StyledCard>
      <StyledCardBackgroundImage src={backgroundImage} />
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDescription>{description}</StyledCardDescription>
      <StyledCardBackgroundImageFilter />
    </StyledCard>
  );
}
