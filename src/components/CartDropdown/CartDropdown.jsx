import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartItems, toggleCartHidden } from "../../redux/cartSlice";
import { CartItem } from "../CartItem/CartItem";
import { CustomButton } from "../CustomButton/CustomButton";
import "./styles.scss";

export const CartDropdown = () => {
  const cartItems = useSelector(getCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((i) => <CartItem key={i.id} item={i} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
