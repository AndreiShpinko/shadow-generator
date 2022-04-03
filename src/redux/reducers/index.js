import { combineReducers } from "redux";
import { shadowReducer, modeReducer } from "./Reducers";

const reducers = combineReducers({
  settings: shadowReducer,
  mode: modeReducer,
});

export default reducers;
