import { combineReducers } from "redux";
import logReducer from "./log.reducer";
import profilReducer from "./profil.reducer";

export default combineReducers({
  logReducer,
  profilReducer,
});
