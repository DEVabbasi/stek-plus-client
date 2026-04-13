export const ENDPOINTS = {
  contact: {
    submit: "/quotations",
  },
  drawings: {
    list: "/drawings",
    byId: (id) => `/drawings/${id}`,
    bySlug: (slug) => `/drawings/slug/${slug}`,
    categories: "/drawings/categories",
  },
};