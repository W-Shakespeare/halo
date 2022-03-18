import styled, { css } from "styled-components";

export const StyledModalCardListForm = styled.div`
  max-width: 384px;
  width: 100%;
  background: #ffffff;
  border-radius: 24px;
  position: relative;
  @media (max-height: 570px) {
    max-width: 320px;
  }
  @media (max-width: 370px) {
    max-width: 290px;
  }
`;

export const Wrapper = styled.div`
  ${({ formW }) =>
    formW &&
    css`
      width: 100%;
      display: flex;
      justify-content: center;
      @media (max-width: 370px) {
        padding: 0px 15px;
      }
    `}

  ${({ close }) =>
    close &&
    css`
      z-index: 11;
      position: absolute;
      right: -10px;
      top: -10px;
      background: #f2f2f2;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: gainsboro;
      }
      &:active {
        background: gray;
      }
    `}
`;

export const Close = styled.i`
  color: black;
  font-size: 20px;
`;
