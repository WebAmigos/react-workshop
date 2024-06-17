import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Button } from "./Button";

describe("Button component", () => {
  it("should render correctly", () => {
    // it's not the best test ever ;)
    const { debug } = render(<Button label="Click me" />);

    const elem = screen.getByText("Click me");
    // debug();
    expect(elem).toBeInTheDocument();
  });
  it("should not have violations", async () => {
    const { container } = render(<Button label="Click me" />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
