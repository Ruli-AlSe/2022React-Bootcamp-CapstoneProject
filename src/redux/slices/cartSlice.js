import { createSlice } from "@reduxjs/toolkit";

//Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartItemsIds: [],
    displayMiniCart: false,
    displayNotification: false,
    notificationData: {
      imageUrl: "",
      name: "",
      qty: 0,
      error: false,
      errorMsg: "",
    },
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload.item];
      state.cartItemsIds = [...state.cartItemsIds, action.payload.item.id];
      state.displayNotification = true;
      state.notificationData = action.payload.info;
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
        if (item.id === action.payload.item.id) {
          item.qty = action.payload.item.qty;
        }
        return item;
      });
      state.displayNotification = true;
      state.notificationData = action.payload.info;
    },
    setDisplayMiniCart: (state, action) => {
      state.displayMiniCart = action.payload;
    },
    setDisplayNotification: (state, action) => {
      state.displayNotification = action.payload;
    },
    updateNotificationData: (state, action) => {
      state.notificationData = action.payload;
      state.displayNotification = true;
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
  setDisplayNotification,
  updateNotificationData,
} = cartSlice.actions;

// Selectors
export const getCartItems = (state) => state.cart.cartItems;
export const getCartItemsIds = (state) => state.cart.cartItemsIds;
export const displayMiniCart = (state) => state.cart.displayMiniCart;
export const displayNotification = (state) => state.cart.displayNotification;
export const getNotificationData = (state) => state.cart.notificationData;
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
