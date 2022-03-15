import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardList } from "../../../redux/cardList/cardList.thunks";
import { Cards } from "./Cards";

export default (props) => {
  const { cardList } = useSelector((state) => state.cardList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardList());
  }, []);

  const cardsProps = { ...props, cardList };

  return <Cards {...cardsProps} />;
};
