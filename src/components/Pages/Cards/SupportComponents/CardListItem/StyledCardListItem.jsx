import styled, { css } from "styled-components";

export const StyledCardListItem = styled.div`
  max-height: 256px;
  height: 100%;
  background-color: gray;
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
`;

export const CutLongText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Category = styled(CutLongText)`
  font-size: 16px;
  line-height: 24px;
  opacity: 0.5;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;
export const Name = styled(CutLongText)`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #000000;
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
  max-width: 190px;
`;
// export const Button=styled.div``
