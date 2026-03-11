export const ENDPOINTS = {
  contact: {
    submit: "/quotations",
  },
  drawings: {
    list: "/drawings",
    byId: (id) => `/drawings/${id}`, // Changed from /drawings/admin/${id} to /drawings/${id}
    categories: "/drawings/categories",
  },
};
