import { CardListForm } from "../CardListForm/CardListForm";
import { CardListItem } from "../CardListItem/CardListItem";
import {
  StyledModalCardListForm,
  Wrapper,
  Close,
} from "./StyledModalCardListForm";
import PropTypes from "prop-types";

export const ModalCardListForm = ({ selectedCard, onCloseModalWithForm }) => {
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

ModalCardListForm.propTypes = {
  onCloseModalWithForm: PropTypes.func,
  selectedCard: PropTypes.object,
};

ModalCardListForm.defaultProps = {
  onCloseModalWithForm: () =>
    console.log("Forgot to add a function onCloseModalWithForm"),
  selectedCard: { category: "category", name: "name", price: "price" },
};
