import contactReducer, { resetContactForm } from "@/store/slices/contactSlice";

describe("contactSlice", () => {
  const initialState = { status: "idle", error: null };

  it("returns initial state", () => {
    expect(contactReducer(undefined, { type: "@@INIT" })).toEqual(initialState);
  });

  it("resets state on resetContactForm", () => {
    const loadingState = { status: "loading", error: "some error" };
    expect(contactReducer(loadingState, resetContactForm())).toEqual(initialState);
  });
});
