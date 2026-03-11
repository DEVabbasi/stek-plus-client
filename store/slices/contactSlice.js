import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "@/lib/api/services/contactService";

const initialState = {
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const submitQuotation = createAsyncThunk(
  "contact/submitQuotation",
  async (payload, { rejectWithValue }) => {
    try {
      return await contactService.submitQuotation(payload);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Verzenden van offerteaanvraag mislukt");
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
      .addCase(submitQuotation.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitQuotation.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitQuotation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetContactForm } = contactSlice.actions;
export default contactSlice.reducer;
