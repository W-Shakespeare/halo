import {
  validatorsName,
  validatorsNumber,
} from "../../../../../constant/validators";
import { useInput } from "../../../../../hook/useInput";
import { Button } from "../../StyledCards";
import { NameInp, NumberInp, StyledCardListForm } from "./StyledCardListForm";

export const CardListForm = (selectedCard) => {
  // const onBlur = (e, validators, setError) =>
  //   validators && !e.target.value ? setError("required") : setError(false);

  const name = useInput(undefined, validatorsName);
  const number = useInput(undefined, validatorsNumber);
  // console.log("name_____", name);
  // console.log("name", name);

  return (
    <StyledCardListForm>
      <NameInp
        value={name.value}
        onChange={name.onChange}
        onBlur={name.onBlur}
        error={name.error}
        placeholder="name"
      />

      <NumberInp
        value={number.value}
        onChange={number.onChange}
        onBlur={number.onBlur}
        error={number.error}
        placeholder="number"
      />
      <Button>Order</Button>
    </StyledCardListForm>
  );
};
