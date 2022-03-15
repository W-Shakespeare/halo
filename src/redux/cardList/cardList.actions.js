import * as types from "./cardList.types";

export const setCardList = (cardListArr) => ({
  type: types.GET_CARDLIST,
  cardListArr,
});
