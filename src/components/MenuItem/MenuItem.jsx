import "./styles.scss";
import { useNavigate } from "react-router-dom";

export const MenuItem = ({ title, subtitle, size, imageUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${size} menu-item`}
      onClick={(e) => {
        e.preventDefault();
        navigate(`shop/${title}`);
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
