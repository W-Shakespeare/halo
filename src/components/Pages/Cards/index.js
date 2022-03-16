import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardList } from "../../../redux/cardList/cardList.thunks";
import { Cards } from "./Cards";

export default (props) => {
  const { cardList } = useSelector((state) => state.cardList);

  const [isShowModalWithForm, setIsShowModalWithForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardList());
  }, []);

  const onShowModalWithForm = (selectedCard) => {
    setIsShowModalWithForm(true);
    setSelectedCard(selectedCard);
  };

  const onCloseModalWithForm = () => {
    setIsShowModalWithForm(false);
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

  const statePropsFormControl = {
    isShowModalWithForm,
    selectedCard,
  };

  const actionPropsFormControl = {
    onBuy,
    onBuyCheapest,
    onCloseModalWithForm,
  };

  const cardListFormControl = {
    ...statePropsFormControl,
    ...actionPropsFormControl,
  };

  const cardsProps = { ...props, ...cardListFormControl, cardList };

  return <Cards {...cardsProps} />;
};
