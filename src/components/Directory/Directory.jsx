import { useSelector } from "react-redux";
import { MenuItem } from "..";
import { getSectionList } from "../../redux/directorySlice";
import "./styles.scss";

export const Directory = () => {
  const sections = useSelector(getSectionList);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};
