import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [],
};

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {
    updateSections: (state, action) => {
      state.sections = action.payload;
    },
  },
});

export const { updateSections } = directorySlice.actions;

export default directorySlice.reducer;

export const getSectionList = createSelector(
  (state) => state.directory,
  (directory) => directory.sections
);
