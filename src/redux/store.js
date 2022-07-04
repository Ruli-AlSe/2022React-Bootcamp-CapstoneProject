import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
  },
});
