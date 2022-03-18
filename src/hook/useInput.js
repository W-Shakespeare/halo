import { useState } from "react";

export const useInput = (initial, initialError = false, validators = []) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(initialError);

  const onChange = (e) => {
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
    true && !error && !e.target.value ? setError("required") : false;

  return { value, error, onChange, onBlur };
};
