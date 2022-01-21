import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CollectionItem } from "../../components";
import { Spinner } from "../../components/Spinner/Spinner";
import { useQueryCollection } from "../../FireBase/FireBaseUtil";
import { getCollection, updateShop } from "../../redux/shopSlice";
import {
  CollectionContainer,
  ItemsContainer,
  TitleContainer,
} from "./CollectionStyles";
export const Collection = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const products = await useQueryCollection("products");
    setIsLoading(false);
    if (products.length) dispatch(updateShop(products));
  }, []);
  const params = useParams();
  const collection = useSelector(getCollection(params.collectionName)) || {};
  const { title, items } = collection;
  if (isLoading) return <Spinner />;
  return (
    <CollectionContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items?.map((i) => (
          <CollectionItem key={i.id} item={i} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};
