import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const isRequred = "Is requred";

const WithInputValidation = (Component) => {
  const InputValidationContainer = ({
    initial,
    initialError = false,
    validators = [],
    buttonClick,
    onCheckInput,
    nameInp,
    ...props
  }) => {
    const [value, setValue] = useState(initial);
    const [error, setError] = useState(initialError);
    const [isUsuallyBorderInp, setIsUsuallyBorderInp] = useState(true);

    const onChange = (e) => {
      setIsUsuallyBorderInp(false);
      const { value } = e.target;

      for (let i = 0; i < validators.length; i++) {
        let validator = validators[i];

        if (!validator.func(value) && !value == "") {
          setError(validator.errorMessage);
          break;
        }
        setError(false);
      }

      setValue(value);
    };

    const onBlur = (e) =>
      true && !error && !e.target.value ? setError(isRequred) : false;

    useEffect(() => {
      if (!buttonClick) return;
      !value && setError(isRequred);
    }, [buttonClick]);

    useEffect(() => {
      onCheckInput(value, error, nameInp);
    }, [value, error]);

    const componentProps = {
      onChange,
      onBlur,
      value,
      error,
      success: !error && !isUsuallyBorderInp,
      nameInp,
      ...props,
    };

    return <Component {...componentProps} />;
  };

  InputValidationContainer.propTypes = {
    initial: PropTypes.string,
    initialError: PropTypes.bool,
    validators: PropTypes.array,
    buttonClick: PropTypes.bool,
    onCheckInput: PropTypes.func,
    nameInp: PropTypes.string,
  };

  InputValidationContainer.defaultProps = {
    initial: undefined,
    initialError: false,
    validators: [],
    buttonClick: false,
    onCheckInput: () => console.log("Forgot to add a function onCheckInput"),
    nameInp: "",
  };

  return InputValidationContainer;
};

export default WithInputValidation;
