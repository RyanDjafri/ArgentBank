import { combineReducers } from "redux";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { thunk } from "redux-thunk";
import { userReducer } from "./log.reducer";
import { profileReducer } from "./profil.reducer";
import uidReducer from "../uidSlice";

const rootReducer = combineReducers({
  log: userReducer,
  profile: profileReducer,
  uid: uidReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(thunk, logger),
});

export default store;
