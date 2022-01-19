import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action) => {
      const index = state.cartItems.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const index = state.cartItems.findIndex((i) => i.id === action.payload);
      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity--;
      } else
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
    },
    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
  },
});

export const { toggleCartHidden, addItem, removeItem, clearItem } =
  cartSlice.actions;

const selectCart = (state) => state.cart;
const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;

export const getCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const getTotalCartItems = createSelector([selectCartItems], (items) =>
  items.reduce((total, i) => total + i.quantity, 0)
);

export const getHidden = createSelector([selectCart], (cart) => cart.hidden);

export const getCartTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total, i) => total + i.quantity * i.price, 0)
);
