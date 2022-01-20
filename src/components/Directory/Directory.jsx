import { useSelector } from "react-redux";
import { MenuItem } from "..";
import { getSectionList } from "../../redux/directorySlice";
import { DirectoryContainer } from "./DirectoryStyles";

export const Directory = () => {
  const sections = useSelector(getSectionList);
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryContainer>
  );
};
