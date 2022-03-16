import CardList from "./SupportComponents/CardList";
import {
  Button,
  StyledCards,
  WrapperCardList,
  WrapperButton,
} from "./StyledCards.jsx";
import { Modal } from "../../Modal/Modal";
import { ModalCardListForm } from "./SupportComponents/ModalCardListForm/ModalCardListForm";

export const Cards = ({
  cardList,
  isShowModalWithForm,
  selectedCard,
  ...props
}) => {
  return (
    <>
      {isShowModalWithForm && (
        <Modal>
          <ModalCardListForm selectedCard={selectedCard} />
        </Modal>
      )}
      <StyledCards>
        {cardList && (
          <WrapperCardList>
            <CardList cardList={cardList} {...props} />
          </WrapperCardList>
        )}
        <WrapperButton>
          <Button buyCheapest>Buy cheapest</Button>
        </WrapperButton>
      </StyledCards>
    </>
  );
};
