export const ENDPOINTS = {
  contact: {
    submit: "/contact",
  },
  projecten: {
    list: "/projecten",
    byId: (id) => `/projecten/${id}`,
  },
  tekenwerken: {
    list: "/tekenwerken",
    byId: (id) => `/tekenwerken/${id}`,
  },
};
