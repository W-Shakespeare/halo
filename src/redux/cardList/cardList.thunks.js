import * as api from "../../api/cardList";
import * as action from "./cardList.actions";

export const getCardList = () => async (dispatch) => {
  dispatch(action.setLoading(true));
  const res = await api.getCardsList();
  dispatch(action.setCardList(res));
  dispatch(action.setLoading(false));
};

export const updateCardsList =
  (cardsListItemId, cardsListItemData) => async (dispatch) => {
    const res = await api.updateCardsList(cardsListItemId, cardsListItemData);
    dispatch(getCardList());
  };
