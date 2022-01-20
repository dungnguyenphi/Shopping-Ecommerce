import { useDispatch } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cartSlice";
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButton,
  TextContainer,
} from "./CheckoutItemStyles";

export const CheckoutItem = ({ item }) => {
  const { id, name, quantity, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeItem(id))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addItem(item))}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButton
        onClick={() => {
          dispatch(clearItem(id));
        }}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
