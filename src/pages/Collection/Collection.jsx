import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CollectionItem } from "../../components";
import { getCollection } from "../../redux/shopSlice";
import "./styles.scss";
export const Collection = () => {
  const params = useParams();
  const collection = useSelector(getCollection(params.collectionName));
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((i) => (
          <CollectionItem key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};
