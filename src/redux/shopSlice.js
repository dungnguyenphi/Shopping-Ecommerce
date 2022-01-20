import { createSelector, createSlice } from "@reduxjs/toolkit";
import { terminate } from "firebase/firestore";

const initialState = {
  products: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateShop: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { updateShop } = shopSlice.actions;

export default shopSlice.reducer;

export const getAllProducts = createSelector(
  (state) => state.shop,
  (shop) => shop.products
);

export const getCollection = (collectionName) =>
  createSelector(
    (state) => state.shop.products,
    (products) => products.find((p) => p.routeName === collectionName)
  );
