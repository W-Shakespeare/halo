import styled, { css } from "styled-components";

export const StyledCards = styled.div`
  padding-top: 105px;
  padding-bottom: 115px;
  display: flex;
  background: #e5e5e5;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const WrapperCardList = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  height: max-content;
  width: 100%;
  max-width: 1156px;
  padding: 0px 10px;
`;

export const WrapperButton = styled.div`
  margin-top: 29px;
`;

export const Button = styled.button`
  border-radius: 16px;
  cursor: pointer;

  ${({ buy }) =>
    buy &&
    css`
      color: #4bcfa0;
      padding: 16px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      font-weight: 500;
      font-size: 16px;
      line-height: unset;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-family: "Roboto";
      max-height: 56px;

      :hover {
        color: #ffffff;
        background: #4bcfa0;
        border: unset;
      }
    `}

  ${({ buyCheapest }) =>
    buyCheapest &&
    css`
      font-family: "Roboto";
      font-weight: 400;
      background: #50daa8;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: -0.02em;
      color: #ffffff;
      border: unset;
      padding: 16px 48px;

      :hover {
        color: #ffffff;
        background: #4bcfa0;
        border: unset;
      }
    `}

    &:active {
    color: #ffffff;
    background: hsl(159deg 58% 48%);
    border: unset;
  }
`;
