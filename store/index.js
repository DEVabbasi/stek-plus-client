import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import uiReducer from "./slices/uiSlice";
import projectenReducer from "./slices/projectenSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    ui: uiReducer,
    projecten: projectenReducer,
  },
});
