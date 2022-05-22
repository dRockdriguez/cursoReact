import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const middlewareEnhancer = applyMiddleware(thunk);

export const store = configureStore({
  reducer: {
    rootReducer,
  },
  undefined,
  middlewareEnhancer,
});
