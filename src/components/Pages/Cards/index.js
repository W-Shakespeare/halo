import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { getCardList } from "../../../redux/cardList/cardList.thunks";
import Cards from "./Cards";

const ContainerCard = (props) => {
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
    const willSortCardList = [...cardList];
    const cheapestCard = willSortCardList.sort((a, b) => a.price - b.price);
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
export default compose()(ContainerCard);
