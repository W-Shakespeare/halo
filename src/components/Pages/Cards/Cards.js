import { CardList } from "./SupportComponents/CardList/CardList";
import { StyledCards } from "./StyledCards.jsx";

export const Cards = ({ cardList, ...props }) => {
  return (
    <StyledCards>{cardList && <CardList cardList={cardList} />}</StyledCards>
  );
};
