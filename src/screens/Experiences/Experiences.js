import React from "react";
import styled from "styled-components";
import CircleProgress from "../../components/CircleProgress/CircleProgress";
import Title from "../../components/Title/Title";
import { Css, NodeJs, ReactIcon, Redux, Sass } from "../../icons";

const StylesExperiences = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const StyledExperiencesCardContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledExperiencesCardRow = styled.div`
  display: flex;
`;

export default function Experiences() {
  return (
    <StylesExperiences id="experiences">
      <Title title={"Experiences"} />
      <StyledExperiencesCardContainer>
        <StyledExperiencesCardRow>
          <CircleProgress title={"React"} icon={<ReactIcon />} percent={95} />
          <CircleProgress title={"Scss"} icon={<Sass />} percent={90} />
          <CircleProgress title={"Css"} icon={<Css />} percent={95} />
        </StyledExperiencesCardRow>
        <StyledExperiencesCardRow>
          <CircleProgress title={"NodeJs"} icon={<NodeJs />} percent={80} />
          <CircleProgress title={"Redux"} icon={<Redux />} percent={75} />
        </StyledExperiencesCardRow>
      </StyledExperiencesCardContainer>
    </StylesExperiences>
  );
}
