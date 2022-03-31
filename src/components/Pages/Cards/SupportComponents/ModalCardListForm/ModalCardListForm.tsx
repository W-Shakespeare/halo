import { FC } from "react";
import { ListItemObj } from "../../../../../redux/cardList/types";
import { CardListForm } from "../CardListForm/CardListForm";
import { CardListItem } from "../CardListItem/CardListItem";
import {
  StyledModalCardListForm,
  Wrapper,
  Close,
} from "./StyledModalCardListForm";

type ModalCardListForm = {
  selectedCard: ListItemObj;
  onCloseModalWithForm: () => void;
};

export const ModalCardListForm: FC<ModalCardListForm> = ({
  selectedCard,
  onCloseModalWithForm,
}) => {
  return (
    <StyledModalCardListForm>
      <Wrapper close onClick={onCloseModalWithForm}>
        <Close className="icon-close" />
      </Wrapper>

      <CardListItem modal currentCard={selectedCard} {...selectedCard} />
      <Wrapper formW>
        <CardListForm
          selectedCard={selectedCard}
          onCloseModalWithForm={onCloseModalWithForm}
        />
      </Wrapper>
    </StyledModalCardListForm>
  );
};

ModalCardListForm.defaultProps = {
  onCloseModalWithForm: () =>
    console.log("Forgot to add a function onCloseModalWithForm"),
  selectedCard: {
    category: "category",
    name: "name",
    price: 0,
    shoppingCart: false,
  },
};
