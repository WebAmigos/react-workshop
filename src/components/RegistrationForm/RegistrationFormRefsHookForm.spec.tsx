import { render, screen, fireEvent } from "@testing-library/react";
import { RegistrationFormRefsHookForm } from "./RegistrationFormRefsHookForm";
import userEvent from "@testing-library/user-event";

describe("RegistrationFormRefsHookForm component", () => {
  it("should validate form using fireEvent", async () => {
    render(<RegistrationFormRefsHookForm />);

    const emailField = screen.getByLabelText(/e-mail/i);
    fireEvent.change(emailField, { target: { value: "aaa" } });

    const passwordField = screen.getByLabelText(/password/i);
    fireEvent.change(passwordField, { target: { value: "bbb" } });

    const languageField = screen.getByLabelText(/language/i);
    fireEvent.change(languageField, { target: { value: "ccc" } });

    fireEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(/invalid e-mail/i)).toBeInTheDocument();
  });
  it("should validate form using userEvent", async () => {
    render(<RegistrationFormRefsHookForm />);

    const emailField = screen.getByLabelText(/e-mail/i);
    await userEvent.type(emailField, "aaa");

    const passwordField = screen.getByLabelText(/password/i);
    await userEvent.type(passwordField, "bbb");

    const languageField = screen.getByLabelText(/language/i);
    await userEvent.type(languageField, "ccc");

    fireEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(/invalid e-mail/i)).toBeInTheDocument();
  });
});
