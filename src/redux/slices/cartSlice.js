import { createSlice } from "@reduxjs/toolkit";

//Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartItemsIds: [],
    displayMiniCart: false,
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
    setDisplayMiniCart: (state, action) => {
      state.displayMiniCart = action.payload;
    },
  },
});

// Actions
export const {
  addCartItem,
  removeCartItem,
  resetCart,
  updateQtyInItem,
  setDisplayMiniCart,
} = cartSlice.actions;

// Selectors
export const getCartItems = (state) => state.cart.cartItems;
export const getCartItemsIds = (state) => state.cart.cartItemsIds;
export const displayMiniCart = (state) => state.cart.displayMiniCart;
export const getTotalItems = (state) => {
  let total = 0;
  state.cart.cartItems.forEach((item) => {
    total += parseInt(item.qty);
  });

  return total;
};

export const getCartSubtotal = (state) => {
  let total = 0;
  state.cart.cartItems.forEach((item) => {
    total += parseInt(item.qty) * parseFloat(item.price);
  });

  return total;
};

//Export reducer
export default cartSlice.reducer;
