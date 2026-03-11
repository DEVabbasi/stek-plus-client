import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectenService from "@/lib/api/services/projectenService";

/**
 * @typedef {Object} ProjectenState
 * @property {Array} items - List of all drawings.
 * @property {Array} categories - List of available categories.
 * @property {string|null} activeCategory - Currently selected category ID.
 * @property {Object|null} currentProject - Currently viewed project detail.
 * @property {Object} loading - Loading states for different sections.
 * @property {Object} error - Error states for different sections.
 */

const initialState = {
  items: [],
  categories: [],
  activeCategory: null,
  currentProject: null,
  loading: {
    items: false,
    categories: false,
    detail: false,
  },
  error: {
    items: null,
    categories: null,
    detail: null,
  },
};

// --- Async Thunks ---

export const fetchCategories = createAsyncThunk(
  "projecten/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      return await projectenService.getCategories();
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Ophalen van categorieën mislukt");
    }
  }
);

export const fetchAllDrawings = createAsyncThunk(
  "projecten/fetchAllDrawings",
  async (_, { rejectWithValue }) => {
    try {
      return await projectenService.getAll();
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Ophalen van projecten mislukt");
    }
  }
);

export const fetchDrawingById = createAsyncThunk(
  "projecten/fetchDrawingById",
  async (id, { rejectWithValue }) => {
    try {
      return await projectenService.getById(id);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Ophalen van projectdetails mislukt");
    }
  }
);

const projectenSlice = createSlice({
  name: "projecten",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    clearCurrentProject: (state) => {
      state.currentProject = null;
      state.error.detail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading.categories = true;
        state.error.categories = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading.categories = false;
        state.categories = action.payload;
        // Auto-select first category if none active
        if (!state.activeCategory && action.payload.length > 0) {
          state.activeCategory = action.payload[0].id;
        }
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading.categories = false;
        state.error.categories = action.payload;
      })

      // All Drawings
      .addCase(fetchAllDrawings.pending, (state) => {
        state.loading.items = true;
        state.error.items = null;
      })
      .addCase(fetchAllDrawings.fulfilled, (state, action) => {
        state.loading.items = false;
        state.items = action.payload;
      })
      .addCase(fetchAllDrawings.rejected, (state, action) => {
        state.loading.items = false;
        state.error.items = action.payload;
      })

      // Single Drawing Detail
      .addCase(fetchDrawingById.pending, (state) => {
        state.loading.detail = true;
        state.error.detail = null;
        state.currentProject = null;
      })
      .addCase(fetchDrawingById.fulfilled, (state, action) => {
        state.loading.detail = false;
        state.currentProject = action.payload;
      })
      .addCase(fetchDrawingById.rejected, (state, action) => {
        state.loading.detail = false;
        state.error.detail = action.payload;
      });
  },
});

export const { setActiveCategory, clearCurrentProject } = projectenSlice.actions;

// --- Selectors ---
export const selectProjectenState = (state) => state.projecten;
export const selectFilteredProjects = (state) => {
  const { items, activeCategory } = state.projecten;
  if (!activeCategory) return items;
  return items.filter((p) => p.category === activeCategory);
};

export default projectenSlice.reducer;
