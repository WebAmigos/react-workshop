import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ViewPort } from "./ViewPort";
import { useViewPort } from "../../hooks/useViewPort";

// jest.mock("../../hooks/useViewPort", () => ({
//   useViewPort: jest.fn().mockImplementationOnce()
// });

vi.mock("../../hooks/useViewPort", () => ({
  // useViewPort: vi.fn().mockImplementationOnce(() => ({ x: 100, y: 200 })),
  useViewPort: vi.fn(),
}));

describe("ViewPort component", () => {
  it("should display default values", () => {
    vi.mocked(useViewPort).mockImplementationOnce(() => ({ x: 1024, y: 768 }));
    render(<ViewPort />);
    expect(screen.getByText(/x: 1024, y: 768/i)).toBeInTheDocument();
  });
  it("should display values", () => {
    vi.mocked(useViewPort).mockImplementationOnce(() => ({ x: 1024, y: 768 }));
    const { debug } = render(<ViewPort />);
    // debug();
    expect(screen.getByText(/x: \d*, y: [0-9]*/i)).toBeInTheDocument();
  });
  it("should display default values", () => {
    vi.mocked(useViewPort).mockImplementationOnce(() => ({ x: 100, y: 200 }));
    render(<ViewPort />);
    expect(screen.getByText(/x: 100, y: 200/i)).toBeInTheDocument();
  });
});
