import React from "react";
import InputText from "./sub-components/Input/Input";
import TextArea from "./sub-components/TextArea/TextArea";

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
