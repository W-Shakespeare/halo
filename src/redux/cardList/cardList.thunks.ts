import * as api from "../../api/cardList";
// import * as action from "./cardList.actions";
import * as action from "./cardList.actions";
import { ListItemObj, ThunkActionType } from "./types";

export const getCardList = (): ThunkActionType => async (dispatch) => {
  dispatch(action.setLoading(true));
  const res = await api.getCardsList();
  dispatch(action.setCardList(res));
  dispatch(action.setLoading(false));
};

export const updateCardsList =
  (
    cardsListItemId: number | undefined,
    cardsListItemData: any
  ): ThunkActionType =>
  async (dispatch) => {
    const res = await api.updateCardsList(cardsListItemId, cardsListItemData);
    dispatch(getCardList());
  };
