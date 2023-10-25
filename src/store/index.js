import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { userReducer } from "./user/reducer";
import { appReducer } from "./app/reducer";

const reducers = {
  user: userReducer,
  app: appReducer,
};

export const store = configureStore({
  reducer: combineReducers(reducers),
});

const makeStore = () => store;

export const reduxWrapper = createWrapper(makeStore);
