import React from "react";
import styled from "styled-components";
import InputText from "./sub-components/Input/Input";
import TextArea from "./sub-components/TextArea/TextArea";

const StyledInputWrapper = styled.div``;

export default function Input(props) {
  return (
    <>
      <RenderInputByType {...props} />
    </>
  );
}

function RenderInputByType(props) {
  let { type } = props;
  if (type === "input") {
    return <InputText {...props} />;
  } else if (type === "textarea") {
    return <TextArea {...props} />;
  } else return "";
}
