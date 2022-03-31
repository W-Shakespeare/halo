import { CardListItem } from "../CardListItem/CardListItem";
import { Wrapper } from "./StyledCardList";
import { ListItemObj } from "../../../../../redux/cardList/types";
import { FC } from "react";

type CardListProps = {
  cardList: Array<ListItemObj> | null;
  onBuy: (selectedCard: ListItemObj) => void;
};

export const CardList: FC<CardListProps> = ({ cardList, onBuy }) => {
  return (
    <>
      {cardList &&
        cardList.map((currentCard) => {
          const id = currentCard.name + currentCard.price;
          return (
            <Wrapper key={id}>
              <CardListItem
                {...currentCard}
                currentCard={currentCard}
                onBuy={onBuy}
              />
            </Wrapper>
          );
        })}
    </>
  );
};

CardList.defaultProps = {
  cardList: null,
  onBuy: () => console.log("Forgot to add a function onBuy"),
};
