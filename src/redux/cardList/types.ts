import * as types from "./cardList.types";

export type ListItemObj = {
  category: string;
  name: string;
  price: string;
  shoppingCart: boolean;
};

export type SetCardListActionTypes = {
  type: typeof types.GET_CARDLIST;
  cardListArr: Array<ListItemObj>;
};

export type SetLoadingActionTypes = {
  type: typeof types.LOADING;
  isLoading: boolean;
};
