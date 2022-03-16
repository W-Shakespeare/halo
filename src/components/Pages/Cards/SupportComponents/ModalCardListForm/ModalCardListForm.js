import { CardListForm } from "../CardListForm/CardListForm";
import { CardListItem } from "../CardListItem/CardListItem";
import { StyledModalCardListForm, Wrapper } from "./StyledModalCardListForm";

export const ModalCardListForm = ({ selectedCard }) => {
  return (
    <StyledModalCardListForm>
      <CardListItem currentCard={selectedCard} {...selectedCard} />
      <Wrapper>
        <CardListForm />
      </Wrapper>
    </StyledModalCardListForm>
  );
};
