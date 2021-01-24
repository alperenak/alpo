import React from "react";
import styled from "styled-components";
import { fontSize } from "../../../../helpers/allVariable";

const StyledInputSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInputLabel = styled.div`
  font-weight: 500;
  margin: 10px 0;
  font-size: ${fontSize.md};
`;
const StyledInput = styled.input`
  border: 2px solid #bbbbbb;
  border-radius: 12px;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  transition: 0.3s;
  &:focus {
    border-radius: 2px;
  }
`;
export default function InputText(props) {
  let { onChange, value, placeholder, labelName } = props;
  return (
    <StyledInputSection>
      {labelName ? <StyledInputLabel>{labelName}</StyledInputLabel> : ""}
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></StyledInput>
    </StyledInputSection>
  );
}
