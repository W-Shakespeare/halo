import * as types from "./cardList.types";

const initialState = {
  cardList: null,
};

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARDLIST: {
      return {
        ...state,
        cardList: action.cardListArr,
      };
    }
    default: {
      return state;
    }
  }
};

export default cardListReducer;
