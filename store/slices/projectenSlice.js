import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "productie",
  activeSubcategory: "productie-staalconstructies",
};

const projectenSlice = createSlice({
  name: "projecten",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setActiveSubcategory: (state, action) => {
      state.activeSubcategory = action.payload;
    },
  },
});

export const { setActiveTab, setActiveSubcategory } = projectenSlice.actions;
export default projectenSlice.reducer;
