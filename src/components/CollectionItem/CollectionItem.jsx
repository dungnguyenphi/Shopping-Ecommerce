import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { CustomButton } from "../CustomButton/CustomButton";
import {
  AddButton,
  CollectionFooterContainer,
  CollectionItemContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
} from "./CollectionItemStyles";
export const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
