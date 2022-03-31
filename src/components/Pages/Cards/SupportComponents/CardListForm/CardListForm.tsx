import { FC, useEffect, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import {
  validatorsName,
  validatorsNumber,
} from "../../../../../constant/validators";
import { Button } from "../../StyledCards";
import {
  NameInp,
  NumberInp,
  StyledCardListForm,
  Wrapper,
} from "./StyledCardListForm";
import { updateCardsList } from "../../../../../redux/cardList/cardList.thunks";
import { ListItemObj } from "../../../../../redux/cardList/types";

type CardListForm = {
  selectedCard: ListItemObj | null;
  onCloseModalWithForm: () => void;
};

export const CardListForm: FC<CardListForm> = ({
  selectedCard,
  onCloseModalWithForm,
}) => {
  const dispatch = useDispatch();
  const [isOrderClick, setIsOrderClick] = useState(false);
  const [isValidateForm, setIsValidateForm] = useState({
    name: false,
    number: false,
  });

  const onOrder = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsOrderClick((pre) => !pre);
  };

  useEffect(() => {
    if (Object.values(isValidateForm).some((inp) => inp === false)) return;

    onCloseModalWithForm();
    const newCardlistItem = { ...selectedCard, shoppingCart: true };
    if (!selectedCard) return;
    dispatch(updateCardsList(selectedCard.id, newCardlistItem));
  }, [isOrderClick]);

  const onCheckInput = (
    val: string,
    error: boolean | string,
    nameInp: string
  ) => {
    !val || error
      ? setIsValidateForm((pre) => ({ ...pre, [nameInp]: false }))
      : setIsValidateForm((pre) => ({ ...pre, [nameInp]: true }));
  };
  return (
    <StyledCardListForm>
      <NameInp
        initial={undefined}
        initialError={false}
        validators={validatorsName}
        buttonClick={isOrderClick}
        placeholder="Name"
        onCheckInput={onCheckInput}
        nameInp="name"
      />

      <NumberInp
        initial={undefined}
        initialError={false}
        validators={validatorsNumber}
        buttonClick={isOrderClick}
        placeholder="Number"
        onCheckInput={onCheckInput}
        nameInp="number"
      />
      <Wrapper>
        <Button orderBtn disabled={false} onClick={onOrder}>
          Order
          <i className="icon-arrow-right"></i>
        </Button>
      </Wrapper>
    </StyledCardListForm>
  );
};

CardListForm.defaultProps = {
  onCloseModalWithForm: () =>
    console.log("Forgot to add a function onCloseModalWithForm"),
  selectedCard: {
    category: "category",
    name: "name",
    price: 0,
    shoppingCart: false,
  },
};
