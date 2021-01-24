import React from "react";
import styled from "styled-components";
import { fontSize } from "../../../../helpers/allVariable";

const StyledTexAreaSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledTexAreaLabel = styled.div`
  font-weight: 500;
  font-size: ${fontSize.md};
  margin: 10px 0;
`;
const StyledTextArea = styled.textarea`
  border: 2px solid #bbbbbb;
  border-radius: 12px;
  padding: 10px;
  transition: 0.3s;
  font-family: "Montserrat", sans-serif;
  &:focus {
    border-radius: 2px;
  }
`;
export default function TextArea(props) {
  let { onChange, value, placeholder, labelName } = props;

  return (
    <StyledTexAreaSection>
      {labelName ? <StyledTexAreaLabel>{labelName}</StyledTexAreaLabel> : ""}

      <StyledTextArea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={10}
      />
    </StyledTexAreaSection>
  );
}
