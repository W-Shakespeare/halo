import * as api from "../../api/cardList";
import * as action from "./cardList.actions";

export const getCardList = () => async (dispatch) => {
  const res = await api.getCardsList();
  // console.log("RES_CARDLIST", res);
  dispatch(action.setCardList(res));
};
