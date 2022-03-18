import styled, { css } from "styled-components";
import { media } from "../../constant/media";

export const StyledErrorBoundary = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logoError {
    width: 40%;
  }
`;

export const ErrorText = styled.div`
  font-size: 30px;
  margin-top: 20px;

  @media (max-width: ${media.mobileL}) {
    font-size: 20px;
  }
`;
