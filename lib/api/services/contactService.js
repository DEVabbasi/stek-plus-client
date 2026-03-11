import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

/**
 * Service for contact-related API calls.
 */
const contactService = {
  /**
   * Submits a quotation request.
   * @param {Object} payload - The contact form data and optional drawingId.
   */
  submitQuotation: async (payload) => {
    const response = await apiClient.post(ENDPOINTS.contact.submit, payload);
    return response.data;
  },
};

export default contactService;
