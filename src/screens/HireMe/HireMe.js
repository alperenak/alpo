import React, { useState } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading/Loading";
import { SendHireMessage } from "../../API/fetch";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { fontSize, HireInformationData } from "../../helpers/allVariable";
import UseFetchData from "../../Hooks/UseFetchData/useFetchData";
import { Check, Close, HireMeImage } from "../../icons";

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
const StyledSendButtonWrapper = styled.div`
  display: flex;
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
const StyledSuccessSendingMessageWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  justify-content: center;
  transition: 0.3s;
  align-items: center;
`;
const StyledErrorSendingMessageWrapper = styled.div`
  display: flex;
  transition: 0.3s;
  justify-content: center;
  margin-left: 10px;
  align-items: center;
`;
const StyledSuccessSendingMessage = styled.div`
  font-size: ${fontSize.xSm};
  margin-left: 5px;
`;
const StyledErrorSendingMessage = styled.div`
  margin-left: 5px;
  font-size: ${fontSize.xSm};
`;
export function HireMe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fetching, setFetching] = UseFetchData();

  function SendMessage() {
    setFetching.onLoading();

    let payload = {
      email: email,
      message: message,
    };

    SendHireMessage(payload)
      .then((data) => setFetching.onSuccess(data))
      .catch((e) => setFetching.onError(e));
  }

  return (
    <StyledHireMe id="hireMe">
      <Title title={"Hire Me"} />
      <StyledHireMeMain>
        <StyledSidesWrapper>
          <StyledLeftSide>
            <StyledLeftSideForm>
              <Input
                type={"input"}
                labelName={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type={"textarea"}
                labelName={"Message"}
                onChange={(e) => setMessage(e.target.value)}
              />
              <StyledSendButtonWrapper>
                <StyledSendButton onClick={SendMessage}>
                  Send Me
                </StyledSendButton>
                <RenderSendingMessages fetching={fetching} />
              </StyledSendButtonWrapper>
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

function RenderSendingMessages({ fetching }) {
  return (
    <>
      {fetching.isLoading && <Loading />}
      {fetching.isSuccess && (
        <StyledSuccessSendingMessageWrapper>
          <Check small />
          <StyledSuccessSendingMessage>
            Mesajınız başarıyla iletildi
          </StyledSuccessSendingMessage>
        </StyledSuccessSendingMessageWrapper>
      )}
      {fetching.isError && (
        <StyledErrorSendingMessageWrapper>
          <Close />
          <StyledErrorSendingMessage>
            Email veya Mesaj kısmı boş bırakılmamalı
          </StyledErrorSendingMessage>
        </StyledErrorSendingMessageWrapper>
      )}
    </>
  );
}

function RenderHireInformation() {
  return HireInformationData.map((item) => {
    return <HireInformation icon={item.icon} text={item.text} />;
  });
}
function HireInformation({ icon, text }) {
  return (
    <StyledHireInformationSection>
      {icon}
      <StyledHireInformationText>{text}</StyledHireInformationText>
    </StyledHireInformationSection>
  );
}
