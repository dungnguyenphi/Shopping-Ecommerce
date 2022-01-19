import { createSelector, createSlice } from "@reduxjs/toolkit";
import { SHOP_DATA } from "../dummyData";

const initialState = {
  products: SHOP_DATA,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

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
