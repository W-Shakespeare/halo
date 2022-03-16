import { StyledInput, Error, WrapperInput } from "./StyledInput";

export const Input = ({ error, className, ...resInpProps }) => {
  return (
    <WrapperInput className={className}>
      <StyledInput {...resInpProps} />
      {error && <Error>{error}</Error>}
    </WrapperInput>
  );
};
