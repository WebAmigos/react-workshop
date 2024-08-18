import { act, renderHook } from "@testing-library/react";
import { useAuth } from "./AuthContext";

describe("useAuth hook", () => {
  it("should change values", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoggedIn).toBeFalsy();
    act(() => {
      expect(result.current.toggleValue());
    });

    expect(result.current.isLoggedIn).toBeTruthy();
  });
});
