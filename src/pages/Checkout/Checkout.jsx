import { useSelector } from "react-redux";
import { CheckoutItem, StripeButton } from "../../components";
import { getCartItems, getCartTotalPrice } from "../../redux/cartSlice";
import {
  CheckoutContainer,
  CheckoutHeader,
  EmptyMessage,
  HeaderBlock,
  TestWarning,
  TotalContainer,
} from "./CheckoutStyles";

export const Checkout = () => {
  const cartItems = useSelector(getCartItems);
  const total = useSelector(getCartTotalPrice);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.length ? (
        cartItems.map((i) => <CheckoutItem item={i} key={i.id} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 -Exp:01/22 - CVV:123
      </TestWarning>
      <StripeButton price={total} />
    </CheckoutContainer>
  );
};
