import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cardListReducer from "./cardList/cardList.reducer";

const reducers = combineReducers({
  cardList: cardListReducer,
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
