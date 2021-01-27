import React from "react";
import styled from "styled-components";
import { LoadingIcon } from "../../icons/index";
const StyledLoading = styled.div`
  display: flex;
  transition: 0.3s;
`;
export default function Loading() {
  return (
    <StyledLoading>
      <LoadingIcon />
    </StyledLoading>
  );
}
