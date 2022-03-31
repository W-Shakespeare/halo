import * as types from "./cardList.types";
import { ActionsType, ListItemObj } from "./types";

type InitialStateType = {
  cardList: null | Array<ListItemObj>;
  isLoading: boolean;
};

const initialState: InitialStateType = {
  cardList: null,
  isLoading: false,
};

const cardListReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case types.GET_CARDLIST: {
      return {
        ...state,
        cardList: action.cardListArr,
      };
    }
    case types.LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default: {
      return state;
    }
  }
};

export default cardListReducer;
