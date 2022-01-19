import { useSelector } from "react-redux";
import { CheckoutItem, StripeButton } from "../../components";
import { getCartItems, getCartTotalPrice } from "../../redux/cartSlice";
import "./styles.scss";

export const Checkout = () => {
  const cartItems = useSelector(getCartItems);
  const total = useSelector(getCartTotalPrice);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? (
        cartItems.map((i) => <CheckoutItem item={i} key={i.id} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 -Exp:01/22 - CVV:123
      </div>
      <StripeButton price={total} />
    </div>
  );
};
