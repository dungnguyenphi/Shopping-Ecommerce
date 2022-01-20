import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MenuItem } from "..";
import { useQueryCollection } from "../../FireBase/FireBaseUtil";
import { getSectionList, updateSections } from "../../redux/directorySlice";
import { Spinner } from "../Spinner/Spinner";
import { DirectoryContainer } from "./DirectoryStyles";

export const Directory = () => {
  const sections = useSelector(getSectionList);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const sectionList = await useQueryCollection("sections");
    setIsLoading(false);
    if (sectionList.length) dispatch(updateSections(sectionList));
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryContainer>
  );
};
