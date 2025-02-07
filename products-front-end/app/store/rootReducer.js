'use client';
import { combineReducers } from "redux";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;