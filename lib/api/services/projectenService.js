import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";
import { normalizeDrawingList, normalizeDrawing, normalizeCategories } from "../../normalizers";

/**
 * Service for project-related API calls.
 */
const projectenService = {
  /**
   * Fetches all drawings and normalizes them.
   */
  getAll: async () => {
    const response = await apiClient.get(ENDPOINTS.drawings.list);
    const drawings = response?.data?.data?.drawings ?? response?.data?.drawings ?? [];
    return normalizeDrawingList(drawings);
  },

  /**
   * Fetches a single drawing by ID and normalizes it.
   */
  getById: async (id) => {
    const response = await apiClient.get(ENDPOINTS.drawings.byId(id));
    const drawing = response?.data?.data?.drawing ?? response?.data?.drawing ?? response?.data;
    return normalizeDrawing(drawing);
  },

  getBySlug: async (slug) => {
    const response = await apiClient.get(ENDPOINTS.drawings.bySlug(slug));
    const drawing = response?.data?.data?.drawing ?? response?.data?.drawing ?? response?.data;
    return normalizeDrawing(drawing);
  },

  /**
   * Fetches categories and normalizes them.
   */
  getCategories: async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.drawings.categories);
      const categories = response?.data?.data?.categories ?? response?.data?.categories ?? response?.data;
      return normalizeCategories(categories);
    } catch (error) {
      console.warn("Failed to fetch categories, using fallback.", error);
      return normalizeCategories(null); // Triggers fallback in normalizer
    }
  },
};

export default projectenService;
