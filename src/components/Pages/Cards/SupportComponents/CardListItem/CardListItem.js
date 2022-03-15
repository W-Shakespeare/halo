import { Button } from "../../StyledCards.jsx";
import * as S from "./StyledCardListItem";

export const CardListItem = ({ category, name, price }) => {
  return (
    <S.StyledCardListItem>
      <S.Category>{category}</S.Category>
      <S.Name>{name}</S.Name>
      <S.Price>{price}</S.Price>
      <Button>buy</Button>
    </S.StyledCardListItem>
  );
};
