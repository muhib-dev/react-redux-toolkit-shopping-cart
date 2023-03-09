import { combineReducers } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";
import cartReducer from "./features/cart/cartSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  cart: cartReducer,
});

export default rootReducer;
