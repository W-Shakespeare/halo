import { Button } from "../../StyledCards.jsx";
import * as S from "./StyledCardListItem";

export const CardListItem = ({ category, name, price, currentCard, onBuy }) => {
  const onWillSelectedCard = () => {
    onBuy(currentCard);
  };
  return (
    <S.StyledCardListItem>
      <S.Category>{category}</S.Category>
      <S.Name>{name}</S.Name>
      <S.Wrapper priceAndButton>
        <S.Wrapper price>
          <S.Symbol$>$</S.Symbol$>
          <S.Price> {price}</S.Price>
        </S.Wrapper>
        <Button onClick={onWillSelectedCard} buy>
          buy
        </Button>
      </S.Wrapper>
    </S.StyledCardListItem>
  );
};
