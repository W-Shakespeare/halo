import styled, { css } from "styled-components";

export const WrapperInput = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 35px;
  margin-bottom: ${({ nameInp }) =>
    (nameInp == "name" && "35px") || (nameInp == "number" && "51px")};

  @media (max-height: 460px) {
    margin-bottom: ${({ nameInp }) =>
      (nameInp == "name" && "25px") || (nameInp == "number" && "25px")};
  }
`;

export const StyledInput = styled.input`
  ::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
  width: 100%;
  height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 16px;

  box-sizing: border-box;
  border-radius: 16px;
  outline: none;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #e43f3f;
    `}

  ${({ success }) =>
    success &&
    css`
      border: 1px solid #4bcfa0;
    `}

    @media (max-height: 570px) {
    height: 46px;
  }
`;

export const ErrorMessage = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #e43f3f;
  position: absolute;
  left: 5px;
  top: 58px;
  @media (max-height: 570px) {
    top: 49px;
  }
`;

export const StyledErrorIcon = styled.span`
  font-size: 24px;
`;

export const WrapperErrorIcon = styled.div`
  position: absolute;
  top: 29px;
  right: 16px;
  transform: translateY(-50%);
  @media (max-height: 570px) {
    top: 25px;
  }
`;

export const Line = styled.span``;

export const Fill = styled.span`
  ::before {
    color: #e43f3f !important;
  }
`;

export const ErrorIcon = () => {
  return (
    <WrapperErrorIcon>
      <StyledErrorIcon className="icon-error">
        <Fill className="path1" />
        <Line className="path2" />
        <Line className="path3" />
      </StyledErrorIcon>
    </WrapperErrorIcon>
  );
};
