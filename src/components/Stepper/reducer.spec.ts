import { reducer, ActionType } from "./Stepper";

describe("Stepper reducer", () => {
  it("should return default state", () => {
    const initialState = { count: 0 };

    const result = reducer(initialState, { type: ActionType.SET_VALUE });
    expect(result).toStrictEqual(initialState);
  });
  it("should increase value", () => {
    const initialState = { count: 0 };

    const result = reducer(initialState, { type: ActionType.INCREMENT });
    expect(result).toStrictEqual({ count: 1 });
  });
  it("should set value", () => {
    const initialState = { count: 0 };

    const result = reducer(initialState, {
      type: ActionType.SET_VALUE,
      payload: 12,
    });
    expect(result).toStrictEqual({ count: 12 });
  });
});
