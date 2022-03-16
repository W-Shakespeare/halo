import { CardListItem } from "../CardListItem/CardListItem";
import { Wrapper } from "./StyledCardList";

export const CardList = ({ cardList, onBuy }) => {
  return (
    <>
      {cardList.map((currentCard, i) => {
        return (
          <Wrapper>
            <CardListItem
              {...currentCard}
              key={i}
              currentCard={currentCard}
              onBuy={onBuy}
            />
          </Wrapper>
        );
      })}
    </>
  );
};
