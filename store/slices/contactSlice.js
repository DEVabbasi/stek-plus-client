import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/lib/api/axios";
import { ENDPOINTS } from "@/lib/api/endpoints";

const initialState = {
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(ENDPOINTS.contact.submit, formData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? "Submission failed");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactForm: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetContactForm } = contactSlice.actions;
export default contactSlice.reducer;
