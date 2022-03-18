import * as types from "./cardList.types";

export const setCardList = (cardListArr) => ({
  type: types.GET_CARDLIST,
  cardListArr,
});

export const setLoading = (isLoading) => ({
  type: types.LOADING,
  isLoading,
});
