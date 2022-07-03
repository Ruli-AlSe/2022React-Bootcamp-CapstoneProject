import { createSlice } from "@reduxjs/toolkit";

//Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      //Add code
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeCartItem: (state, action) => {
      //Add code
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      //Add code
      state.cartItems = [];
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

//Export reducer
export default cartSlice.reducer;
