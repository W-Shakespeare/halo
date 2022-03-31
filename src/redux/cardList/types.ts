import * as types from "./cardList.types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store";

export type ListItemObj = {
  category: string;
  name: string;
  price: number;
  shoppingCart: boolean;
  id?: number;
};

export type SetCardListActionTypes = {
  type: typeof types.GET_CARDLIST;
  cardListArr: Array<ListItemObj>;
};

export type SetLoadingActionTypes = {
  type: typeof types.LOADING;
  isLoading: boolean;
};

export type ActionsType = SetCardListActionTypes | SetLoadingActionTypes;

export type ThunkActionType = ThunkAction<
  void,
  AppStateType,
  unknown,
  ActionsType
>;
