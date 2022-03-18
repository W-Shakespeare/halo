import styled, { css } from "styled-components";
import { media } from "../../../../../constant/media";

export const StyledCardListItem = styled.div`
  max-height: 256px;
  height: 100%;
  background-color: gray;
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;

  ${({ modal }) =>
    modal &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-height: 570px) {
        padding: 20px;
      }
    `}

  @media (max-width: ${media.mobileL}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: unset;
    padding: 24px;
  }
`;

export const CutLongText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  /* @media (max-width: ${media.mobileL}) {
    max-width: 100%;
  } */
`;

export const Category = styled(CutLongText)`
  font-size: 16px;
  line-height: 24px;
  opacity: 0.5;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: ${media.mobileL}) {
    font-size: 14px;
  }
  @media (max-height: 570px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const Name = styled(CutLongText)`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #000000;

  @media (max-width: ${media.mobileL}) {
    font-size: 35px;
  }
  @media (max-height: 570px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Wrapper = styled.div`
  ${({ price }) =>
    price &&
    css`
      display: flex;
    `}

  ${({ priceAndButton }) =>
    priceAndButton &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: ${media.mobileL}) {
        flex-direction: column;
      }
    `}



    ${({ button }) =>
    button &&
    css`
      @media (max-width: ${media.mobileL}) {
        margin-top: 15px;
      }
    `}

    ${({ shopingCard }) =>
    shopingCard &&
    css`
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #4bcfa0;

      @media (max-width: ${media.mobileL}) {
        margin-top: 15px;
      }
    `}
`;

export const Symbol$ = styled.div`
  margin-top: 10px;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #000000;
`;

export const Price = styled(CutLongText)`
  font-size: 60px;
  line-height: 72px;
  letter-spacing: -0.02em;
  color: #000000;
  max-width: 250px;

  @media (max-width: ${media.mobileL}) {
    font-size: 50px;
  }
  @media (max-height: 570px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const ShoppingCard = styled.i`
  font-size: 24px;
  color: white;
`;
