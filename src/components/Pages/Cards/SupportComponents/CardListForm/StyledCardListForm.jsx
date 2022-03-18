import styled, { css } from "styled-components";
import Input from "../../../../Input/Input";

export const StyledCardListForm = styled.form`
  max-width: 288px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameInp = styled(Input)``;

export const NumberInp = styled(Input)``;

export const Wrapper = styled.div`
  margin-bottom: 66px;
  @media (max-height: 570px) {
    margin-bottom: 11px;
  }
  @media (max-width: 370px) {
    display: flex;
    justify-content: center;
  }
`;
