import { CardListItem } from "../CardListItem/CardListItem";
import { Wrapper } from "./StyledCardList";
import PropTypes from "prop-types";

export const CardList = ({ cardList, onBuy }) => {
  return (
    <>
      {cardList.map((currentCard, i) => {
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

CardList.propTypes = {
  cardList: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.oneOf([null]),
  ]),
  onBuy: PropTypes.func,
};

CardList.defaultProps = {
  cardList: null,
  onBuy: () => console.log("Forgot to add a function onBuy"),
};
