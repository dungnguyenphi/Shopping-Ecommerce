import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
const initialState = {
  products: [],
  status: null,
  errors: null,
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
