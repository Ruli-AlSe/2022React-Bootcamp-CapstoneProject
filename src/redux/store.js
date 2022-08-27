import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import loadingReducer from "./slices/loadingSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
    order: orderReducer,
  },
});
