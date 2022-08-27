import { createSlice } from "@reduxjs/toolkit";

//Slice
export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
    isLoadingHome: false,
    isLoadingPDP: false,
    isLoadingPLP: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsLoadingHome: (state, action) => {
      state.isLoadingHome = action.payload;
    },
    setIsLoadingPDP: (state, action) => {
      state.isLoadingPDP = action.payload;
    },
    setIsLoadingPLP: (state, action) => {
      state.isLoadingPLP = action.payload;
    },
  },
});

// Actions
export const {
  setIsLoading,
  setIsLoadingHome,
  setIsLoadingPDP,
  setIsLoadingPLP,
} = loadingSlice.actions;

// Selectors
export const getIsLoading = (state) => state.loading.isLoading;
export const getIsLoadingHome = (state) => state.loading.isLoadingHome;
export const getIsLoadingPDP = (state) => state.loading.isLoadingPDP;
export const getIsLoadingPLP = (state) => state.loading.isLoadingPLP;

//Export reducer
export default loadingSlice.reducer;
