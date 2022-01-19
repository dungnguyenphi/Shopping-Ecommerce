import { CollectionItem } from "../CollectionItem/CollectionItem";
import "./styles.scss";
export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((i, index) => index < 4)
          .map((i) => (
            <CollectionItem key={i.id} item={i} />
          ))}
      </div>
    </div>
  );
};
