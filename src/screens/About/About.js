import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import { fontSize } from "../../helpers/allVariable";
import { AboutImage } from "../../icons";

const StyledAbout = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100vh;
  flex-direction: column;
  width: 100%;
`;
const StyledAboutMain = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const StyledLeftSide = styled.div`
  flex: 1;
  padding-left: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 30px;
`;

const StyledRightSide = styled.div`
  flex: 1;
`;
const StyledLeftSideTitle = styled.div`
  font-weight: 600;
  font-size: ${fontSize.md};
  margin-bottom: 30px;
`;
const StyledLeftSideDescription = styled.div`
  font-weight: 400;
  width: 75%;
  font-size: ${fontSize.md};
`;
const StyledHireButton = styled.div`
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
export function About() {
  return (
    <StyledAbout id="about">
      <Title title={"About"} />
      <StyledAboutMain>
        <StyledLeftSide>
          <StyledLeftSideTitle>Hi There !</StyledLeftSideTitle>
          <StyledLeftSideDescription>
            Merhabalar ben Alperen. 21 yaşındayım. 19 Mayıs Üniversitesi
            Bilgisayar Mühendisliği bölümünde okuyorum. Innovation and Partners
            şirketinde 5 aydır çalışıyorum onun öncesinde 2 yıl yazılım geçmişim
            var. Benimle iletişime geçmek istersen aşağıdaki formu
            doldurabilirsin.
          </StyledLeftSideDescription>
          <StyledHireButton onClick={() => (window.location.href = "#hireMe")}>
            Hire Me
          </StyledHireButton>
        </StyledLeftSide>
        <StyledRightSide>
          <AboutImage />
        </StyledRightSide>
      </StyledAboutMain>
    </StyledAbout>
  );
}
