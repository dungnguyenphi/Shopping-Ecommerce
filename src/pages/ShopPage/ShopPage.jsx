import { useSelector } from "react-redux";
import { CollectionPreview } from "../../components/CollectionPreview/CollectionPreview";
import { getAllProducts, updateShop } from "../../redux/shopSlice";
import { useQueryCollection } from "../../FireBase/FireBaseUtil";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Spinner } from "../../components/Spinner/Spinner";

export const ShopPage = () => {
  const collections = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const products = await useQueryCollection("products");
    setIsLoading(false);
    if (products.length) dispatch(updateShop(products));
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview isLoading={isLoading} key={id} {...otherProps} />
      ))}
    </div>
  );
};
export default withSpinner(ShopPage);
