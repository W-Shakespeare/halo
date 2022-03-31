import CardList from "./SupportComponents/CardList";
import {
  Button,
  StyledCards,
  WrapperCardList,
  WrapperButton,
} from "./StyledCards.jsx";
import { Modal } from "../../Modal/Modal";
import { ModalCardListForm } from "./SupportComponents/ModalCardListForm/ModalCardListForm";
import { compose } from "redux";
import { WithLoaderCardPage } from "../../../hoc/withLoaderCardPage";
import { ListItemObj } from "../../../redux/cardList/types";
import React, { FC } from "react";

type CardsPropsType = {
  cardList: Array<ListItemObj> | null;
  isShowModalWithForm: boolean;
  selectedCard: ListItemObj;
  onBuyCheapest: () => void;
  onCloseModalWithForm: () => void;
};

const Cards: FC<CardsPropsType> = ({
  cardList,
  isShowModalWithForm,
  onCloseModalWithForm,
  selectedCard,
  onBuyCheapest,
  ...props
}) => {
  return (
    <>
      {isShowModalWithForm && (
        <Modal>
          <ModalCardListForm
            selectedCard={selectedCard}
            onCloseModalWithForm={onCloseModalWithForm}
          />
        </Modal>
      )}
      {cardList && (
        <StyledCards>
          {cardList && (
            <WrapperCardList>
              <CardList cardList={cardList} {...props} />
            </WrapperCardList>
          )}
          <WrapperButton>
            <Button buyCheapest onClick={onBuyCheapest}>
              Buy cheapest
            </Button>
          </WrapperButton>
        </StyledCards>
      )}
    </>
  );
};

Cards.defaultProps = {
  cardList: null,
  isShowModalWithForm: false,
  onCloseModalWithForm: () =>
    console.log("Forgot to add a function onCloseModalWithForm"),
  selectedCard: {
    category: "category",
    name: "name",
    price: 0,
    shoppingCart: false,
  },
  onBuyCheapest: () => console.log("Forgot to add a function onBuyCheapest"),
};

export default compose(WithLoaderCardPage)(Cards);
