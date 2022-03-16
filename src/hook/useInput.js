import { useState } from "react";

export const useInput = (initial, validators = []) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(false);
  console.log("error", error);
  console.log("validators", validators);

  const onChange = (e) => {
    const { value } = e.target;
    // value == "" && setError(false);
    // value && checkText(value) && setError(false);

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

  // const

  const onBlur = (e) =>
    true && !error && !e.target.value ? setError("required") : false;

  return { value, error, onChange, onBlur };
};
