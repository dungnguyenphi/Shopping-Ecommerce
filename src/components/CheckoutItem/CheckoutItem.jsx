import { useDispatch } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cartSlice";
import "./styles.scss";

export const CheckoutItem = ({ item }) => {
  const { id, name, quantity, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(id))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          dispatch(clearItem(id));
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
