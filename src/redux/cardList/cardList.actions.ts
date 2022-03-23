import * as types from "./cardList.types";
import * as T from "./types";

export const setCardList = (
  cardListArr: Array<T.ListItemObj>
): T.SetCardListActionTypes => ({
  type: types.GET_CARDLIST,
  cardListArr,
});

export const setLoading = (isLoading: boolean): T.SetLoadingActionTypes => ({
  type: types.LOADING,
  isLoading,
});
