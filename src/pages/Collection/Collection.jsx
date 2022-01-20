import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CollectionItem } from "../../components";
import { getCollection } from "../../redux/shopSlice";
import {
  CollectionContainer,
  ItemsContainer,
  TitleContainer,
} from "./CollectionStyles";
export const Collection = () => {
  const params = useParams();
  const collection = useSelector(getCollection(params.collectionName));
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((i) => (
          <CollectionItem key={i.id} item={i} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};
