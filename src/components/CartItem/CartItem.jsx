import { CartItemContainer, ItemDetailsContainer } from "./CartItemStyles";
export const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};
