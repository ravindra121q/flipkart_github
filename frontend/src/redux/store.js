import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const RootReducer = combineReducers({});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));
