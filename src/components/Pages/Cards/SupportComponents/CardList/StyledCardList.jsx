import styled from "styled-components";
import { media } from "../../../../../constant/media";

export const Wrapper = styled.div`
  max-width: 352px;
  width: 100%;
  &:nth-child(3n + 2) {
    margin: 0px 40px 40px 40px;
  }
  margin-bottom: 40px;

  @media (max-width: ${media.laptop}) {
    &:nth-child(3n + 2) {
      margin: 0px 20px 20px 20px;
    }
    margin: 0px 20px 20px 20px;
  }

  @media (max-width: ${media.mobileL}) {
    max-width: 100%;
    padding: 20px;
    &:nth-child(3n + 2) {
      margin: unset;
    }
    margin: unset;
  }
`;
