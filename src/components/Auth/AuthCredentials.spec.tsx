import { render, screen, fireEvent } from "@testing-library/react";
import { AuthCredentials } from "./AuthCredentials";
import { AuthContextProvider } from "./AuthContext";
import userEvent from "@testing-library/user-event";

describe("AuthCredentials component", () => {
  it("should toggle values", async () => {
    const { debug } = render(
      <AuthContextProvider>
        <AuthCredentials />
      </AuthContextProvider>
    );
    expect(screen.getByText("Is user logged? NO")).toBeInTheDocument();
    // expect(screen.getByText("Is user logged? NO", { exact: false })).toBeInTheDocument();
    // expect(screen.getByText(/is user logged? no/i)).toBeInTheDocument();

    // fireEvent.click(screen.getByRole("button", { name: "Toggle" }));
    await userEvent.click(screen.getByRole("button", { name: "Toggle" }));
    // debug();
    expect(screen.getByText(/is user logged\? yes/i)).toBeInTheDocument();
  });
});
