import "./styles.scss";
import ShoppingCartIcon from "../../assets/shopping-bag.svg?component";
import { useDispatch } from "react-redux";
import { getTotalCartItems, toggleCartHidden } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import React from "react";

export const CartIcon = React.memo(() => {
  const dispatch = useDispatch();
  const totalCartItems = useSelector(getTotalCartItems);
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{totalCartItems}</span>
    </div>
  );
});
