import React from "react";
import styled from "styled-components";
import TopBar from "../../components/TopBar/TopBar";
import { fontSize, HomeSideData } from "../../helpers/allVariable";
import {
  Check,
  Facebook,
  Github,
  Instagram,
  Twitter,
  HomeImage,
} from "../../icons/index";
const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
`;
const StyledHomeMain = styled.div`
  display: flex;
  flex: 4;
  width: 100%;
`;
const StyledLeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 70px;
  justify-content: center;
`;
const StyledRightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLandingTitle = styled.div`
  font-size: ${fontSize.xxLg};
  font-weight: 900;
  margin-bottom: 70px;
`;
const StyledLandingFeaturesWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
`;
const StyledLandingFeatures = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
`;
const StyledLandingFeaturesTitle = styled.div`
  font-size: ${fontSize.lg};
  margin-left: 15px;
  font-weight: 400;
`;
const StyledSocialNetworksWrapper = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const StyledSocialNetworks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
`;

export default function Home() {
  return (
    <StyledHome id="home">
      <TopBar />
      <StyledHomeMain>
        <StyledLeftSide>
          <StyledLandingTitle>{HomeSideData.title}</StyledLandingTitle>
          <StyledLandingFeaturesWrapper>
            <RenderFeatures />
          </StyledLandingFeaturesWrapper>
        </StyledLeftSide>
        <StyledRightSide>
          <HomeImage />
        </StyledRightSide>
      </StyledHomeMain>
      <StyledSocialNetworksWrapper>
        <StyledSocialNetworks>
          <Facebook />
          <Github />
          <Twitter />
          <Instagram />
        </StyledSocialNetworks>
      </StyledSocialNetworksWrapper>
    </StyledHome>
  );
}

function RenderFeatures() {
  return HomeSideData.subFeatures.map((item) => {
    return (
      <StyledLandingFeatures>
        <Check />
        <StyledLandingFeaturesTitle>{item.text}</StyledLandingFeaturesTitle>
      </StyledLandingFeatures>
    );
  });
}
