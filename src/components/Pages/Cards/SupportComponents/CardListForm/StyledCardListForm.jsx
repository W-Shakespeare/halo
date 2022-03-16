import styled, { css } from "styled-components";
import { Input } from "../../../../Input/Input";

export const StyledCardListForm = styled.form`
  max-width: 288px;
  width: 100%;
`;

export const NameInp = styled(Input)`
  input {
    width: 100%;
    height: 56px;
    border: 1px solid #4bcfa0;
    box-sizing: border-box;
    border-radius: 16px;

    ${({ error }) =>
      error &&
      css`
        border: 1px solid #e43f3f;
      `}
  }
  margin-bottom: 16px;
`;

export const NumberInp = styled(Input)`
  input {
    width: 100%;
    height: 56px;
    border: 1px solid #4bcfa0;
    box-sizing: border-box;
    border-radius: 16px;

    ${({ error }) =>
      error &&
      css`
        border: 1px solid #e43f3f;
      `}
  }
  margin-bottom: 32px;
`;
