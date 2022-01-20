import { useNavigate } from "react-router-dom";
import { CollectionItem } from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer,
} from "./CollectionPreviewStyles";
export const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle
        onClick={() => {
          navigate(`/shop/${routeName}`);
        }}
      >
        {title}
      </CollectionPreviewTitle>
      <PreviewContainer>
        {items
          .filter((i, index) => index < 4)
          .map((i) => (
            <CollectionItem key={i.id} item={i} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};
