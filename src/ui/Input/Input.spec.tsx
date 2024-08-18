import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import { Input } from "./Input";

describe("Input component", () => {
  it("should not have violations", async () => {
    const { container } = render(<Input label="E-mail" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
