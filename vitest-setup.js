import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";

// expect.extend(matchers);
expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});
