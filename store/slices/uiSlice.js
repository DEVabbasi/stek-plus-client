import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lightboxItem: null,
  mobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openLightbox: (state, action) => {
      state.lightboxItem = action.payload;
    },
    closeLightbox: (state) => {
      state.lightboxItem = null;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
  },
});

export const { openLightbox, closeLightbox, toggleMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
