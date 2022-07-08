import { createSlice } from "@reduxjs/toolkit";

//Slice
export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
  },
});

// Actions
export const { addOrder } = orderSlice.actions;

// Selectors
export const getOrders = (state) => state.order.orders;
export const getLastOrder = (state) => state.order.orders.at(-1);

//Export reducer
export default orderSlice.reducer;
