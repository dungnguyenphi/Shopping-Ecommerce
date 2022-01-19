import { Directory } from "../../components";
import "./styles.scss";
export const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};
