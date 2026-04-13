// src/store/slices/projectenSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectenService from "@/lib/api/services/projectenService";

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

// NEW: fetch by slug (preferred — keeps URLs clean)
export const fetchDrawingBySlug = createAsyncThunk(
  "projecten/fetchDrawingBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      return await projectenService.getBySlug(slug);
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
      .addCase(fetchCategories.pending, (state) => {
        state.loading.categories = true;
        state.error.categories = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading.categories = false;
        state.categories = action.payload;
        if (!state.activeCategory && action.payload.length > 0) {
          state.activeCategory = action.payload[0].id;
        }
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading.categories = false;
        state.error.categories = action.payload;
      })

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

      // fetchDrawingById (kept for backwards compat)
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
      })

      // fetchDrawingBySlug (new — used by slug-based pages)
      .addCase(fetchDrawingBySlug.pending, (state) => {
        state.loading.detail = true;
        state.error.detail = null;
        state.currentProject = null;
      })
      .addCase(fetchDrawingBySlug.fulfilled, (state, action) => {
        state.loading.detail = false;
        state.currentProject = action.payload;
      })
      .addCase(fetchDrawingBySlug.rejected, (state, action) => {
        state.loading.detail = false;
        state.error.detail = action.payload;
      });
  },
});

export const { setActiveCategory, clearCurrentProject } = projectenSlice.actions;

export const selectProjectenState = (state) => state.projecten;
const sortProjectsForDisplay = (projects) =>
  [...projects].sort((a, b) => {
    if (Boolean(a.isFeatured) !== Boolean(b.isFeatured)) {
      return a.isFeatured ? -1 : 1;
    }

    const aFeaturedAt = a.featuredAt ? new Date(a.featuredAt).getTime() : 0;
    const bFeaturedAt = b.featuredAt ? new Date(b.featuredAt).getTime() : 0;
    if (aFeaturedAt !== bFeaturedAt) {
      return bFeaturedAt - aFeaturedAt;
    }

    const aCreatedAt = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bCreatedAt = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return bCreatedAt - aCreatedAt;
  });

export const selectFilteredProjects = (state) => {
  const { items, activeCategory } = state.projecten;
  const filtered = !activeCategory
    ? items
    : items.filter((p) => p.category === activeCategory);

  return sortProjectsForDisplay(filtered);
};

export default projectenSlice.reducer;