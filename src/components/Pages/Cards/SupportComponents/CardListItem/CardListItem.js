import { Button } from "../../StyledCards.jsx";
import * as S from "./StyledCardListItem";
import PropTypes from "prop-types";

export const CardListItem = ({
  category,
  name,
  price,
  shoppingCart,
  currentCard,
  onBuy,
  modal,
}) => {
  const onWillSelectedCard = () => {
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

CardListItem.propTypes = {
  category: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shoppingCart: PropTypes.bool,
  currentCard: PropTypes.object,
  onBuy: PropTypes.func,
  modal: PropTypes.bool,
  onBuy: PropTypes.func,
};

CardListItem.defaultProps = {
  category: "category",
  name: "name",
  price: "price",
  shoppingCart: false,
  currentCard: {
    category: "category",
    name: "name",
    price: "price",
    shoppingCart: false,
  },
  modal: false,
  onBuy: () => console.log("Forgot to add a function onBuy"),
};
