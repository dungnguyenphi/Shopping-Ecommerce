import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Content,
  MenuItemContainer,
  Subtitle,
  Title,
} from "./MenuItemStyles";

export const MenuItem = ({ title, size, imageUrl }) => {
  const navigate = useNavigate();
  return (
    <MenuItemContainer
      size={size}
      onClick={(e) => {
        e.preventDefault();
        navigate(`shop/${title}`);
      }}
    >
      <BackgroundImage imageUrl={imageUrl} className="background-image" />
      <Content className="content">
        <Title>{title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};
