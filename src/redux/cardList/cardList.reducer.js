import * as types from "./cardList.types";

const initialState = {
  cardList: null,
  isLoading: false,
};

const cardListReducer = (state = initialState, action) => {
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
