import { createSelector, createSlice } from "@reduxjs/toolkit";
import { sectionList } from "../dummyData";

const initialState = {
  sections: sectionList,
};

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export default directorySlice.reducer;

export const getSectionList = createSelector(
  (state) => state.directory,
  (directory) => directory.sections
);
