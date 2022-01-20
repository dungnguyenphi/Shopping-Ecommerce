import { useDispatch } from "react-redux";
import { getTotalCartItems, toggleCartHidden } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import React from "react";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIconStyles";

export const CartIcon = React.memo(() => {
  const dispatch = useDispatch();
  const totalCartItems = useSelector(getTotalCartItems);
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCount>{totalCartItems}</ItemCount>
    </CartIconContainer>
  );
});
