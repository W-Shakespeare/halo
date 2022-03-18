import { compose } from "redux";
import WithInputValidation from "../../hoc/withInputValidation";
import {
  StyledInput,
  ErrorMessage,
  WrapperInput,
  ErrorIcon,
} from "./StyledInput";
import PropTypes from "prop-types";

const Input = ({ error, className, ...resInpProps }) => {
  const wrapperProps = { error, ...resInpProps };
  return (
    <WrapperInput {...wrapperProps} className={className}>
      <StyledInput {...resInpProps} error={error} />
      {error && <ErrorIcon />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </WrapperInput>
  );
};

Input.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  success: PropTypes.bool,
  nameInp: PropTypes.string,
};

Input.defaultProps = {
  error: false,
  className: "",
  onChange: () => console.log("Forgot to add a function onChange"),
  onBlur: () => console.log("Forgot to add a function onBlur"),
  value: "",
  success: false,
  nameInp: "",
};

export default compose(WithInputValidation)(Input);
