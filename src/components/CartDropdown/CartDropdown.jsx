import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartItems, toggleCartHidden } from "../../redux/cartSlice";
import { CartItem } from "../CartItem/CartItem";
import { CustomButton } from "../CustomButton/CustomButton";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./CartDropdownStyles";

export const CartDropdown = () => {
  const cartItems = useSelector(getCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((i) => <CartItem key={i.id} item={i} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          navigate("checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};
