import { createSlice } from "@reduxjs/toolkit";

//Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartItemsIds: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      state.cartItemsIds = [...state.cartItemsIds, action.payload.id];
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItemsIds = state.cartItemsIds.filter(
        (id) => id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.cartItems = [];
      state.cartItemsIds = [];
    },
    updateQtyInItem: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.qty = action.payload.qty;
        }
        return item;
      });
    },
  },
});

// Actions
export const {
  addCartItem,
  removeCartItem,
  resetCart,
  updateQtyInItem,
  setCurrentProduct,
} = cartSlice.actions;

// Selectors
export const getCartItems = (state) => state.cart.cartItems;
export const getCartItemsIds = (state) => state.cart.cartItemsIds;

//Export reducer
export default cartSlice.reducer;
