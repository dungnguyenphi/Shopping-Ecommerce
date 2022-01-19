import { useSelector } from "react-redux";
import { CollectionPreview } from "../../components/CollectionPreview/CollectionPreview";
import { getAllProducts } from "../../redux/shopSlice";

export const ShopPage = () => {
  const collections = useSelector(getAllProducts);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};
