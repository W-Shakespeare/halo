import { Button } from "../../StyledCards.jsx";
import * as S from "./StyledCardListItem";
import { ListItemObj } from "../../../../../redux/cardList/types.js";
import { FC } from "react";

type CardListItemPropsType = {
  category: string | undefined;
  name: string | undefined;
  price: number | undefined;
  shoppingCart: boolean | undefined;
  id?: number | undefined;
  currentCard: ListItemObj | null;
  onBuy?: (selectedCard: ListItemObj) => void;
  modal?: boolean | undefined;
};

export const CardListItem: FC<CardListItemPropsType> = ({
  category,
  name,
  price,
  shoppingCart,
  currentCard,
  onBuy,
  modal,
}) => {
  const onWillSelectedCard = () => {
    if (!currentCard || !onBuy) return;
    onBuy(currentCard);
  };
  return (
    <S.StyledCardListItem modal={modal}>
      <S.Category>{category}</S.Category>
      <S.Name>{name}</S.Name>
      <S.Wrapper priceAndButton>
        <S.Wrapper price>
          <S.Symbol$>$</S.Symbol$>
          <S.Price> {price}</S.Price>
        </S.Wrapper>
        {!modal && (
          <S.Wrapper button>
            {shoppingCart == true && (
              <S.Wrapper shopingCard>
                <S.ShoppingCard className="icon-shopping-bag" />
              </S.Wrapper>
            )}
            {!shoppingCart == true && (
              <Button onClick={onWillSelectedCard} buy>
                buy
              </Button>
            )}
          </S.Wrapper>
        )}
      </S.Wrapper>
    </S.StyledCardListItem>
  );
};

CardListItem.defaultProps = {
  category: "category",
  name: "name",
  price: 0,
  shoppingCart: false,
  currentCard: {
    category: "category",
    name: "name",
    price: 0,
    shoppingCart: false,
  },
  modal: false,
  onBuy: () => console.log("Forgot to add a function onBuy"),
};
