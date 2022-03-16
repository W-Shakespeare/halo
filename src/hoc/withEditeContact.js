import React, { useState } from "react";
// import { getCardList } from "../redux/cardList/cardList.thunks";
import { useDispatch, useSelector } from "react-redux";

export const withCardListModalForm = (Component) => {
  const CardListModalForm = (props) => {
    const dispatch = useDispatch();
    const { cardList } = useSelector((state) => state.cardList);

    const [isShowModalWithForm, setIsShowModalWithForm] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const onShowModalWithForm = (selectedCard) => {
      setIsShowModalWithForm(true);
      setSelectedCard(selectedCard);
    };

    const onGetCheapestCard = () => {
      const cheapestCard = [].sort((a, b) => a - b);
      return cheapestCard[0];
    };

    const onBuy = (selectedCard) => {
      onShowModalWithForm(selectedCard);
    };

    const onBuyCheapest = () => {
      const cheapestCard = onGetCheapestCard();
      onShowModalWithForm(cheapestCard);
    };

    const stateProps = {
      isShowModalWithForm,
    };

    const actionProps = {
      onBuy,
      onBuyCheapest,
    };

    const cardListFormControl = {
      ...stateProps,
      ...actionProps,
    };

    return <Component {...props} cardListFormControl={cardListFormControl} />;
  };
  return CardListModalForm;
};
