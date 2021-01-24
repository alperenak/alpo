import React from "react";
import styled from "styled-components";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { fontSize, HireInformationData } from "../../helpers/allVariable";
import { HireMeImage } from "../../icons";

const StyledHireMe = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  flex-direction: column;
  height: 100vh;
`;
const StyledHireMeMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledSidesWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;
const StyledLeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const StyledRightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const StyledLeftSideForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
`;
const StyledSendButton = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: white;
  width: 140px;
  cursor: pointer;
  height: 50px;
  margin: 30px 0;
  font-size: ${fontSize.md};
  font-weight: 400;
`;
const StyledHireMeFooter = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
const StyledHireInformationSection = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
`;
const StyledHireInformationText = styled.div`
  text-align: center;
  margin-left: 10px;
  display: flex;
`;
export function HireMe() {
  return (
    <StyledHireMe id="hireMe">
      <Title title={"Hire Me"} />
      <StyledHireMeMain>
        <StyledSidesWrapper>
          <StyledLeftSide>
            <StyledLeftSideForm>
              <Input type={"input"} labelName={"Email"} />
              <Input type={"textarea"} labelName={"Message"} />
              <StyledSendButton>Send Me</StyledSendButton>
            </StyledLeftSideForm>
          </StyledLeftSide>
          <StyledRightSide>
            <HireMeImage />
          </StyledRightSide>
        </StyledSidesWrapper>
        <StyledHireMeFooter>
          <RenderHireInformation />
        </StyledHireMeFooter>
      </StyledHireMeMain>
    </StyledHireMe>
  );
}
function HireInformation({ icon, text }) {
  return (
    <StyledHireInformationSection>
      {icon}
      <StyledHireInformationText>{text}</StyledHireInformationText>
    </StyledHireInformationSection>
  );
}
function RenderHireInformation() {
  return HireInformationData.map((item) => {
    return <HireInformation icon={item.icon} text={item.text} />;
  });
}
