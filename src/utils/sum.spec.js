// sum.test.js
import { expect, test } from "vitest";
import { sum } from "./sum";

// describe("Sum function", () => {
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 'abc' to equal 1abc", () => {
  expect(sum(1, "abc")).toBe("1abc");
});

// it("should equals 3", () => {
//   expect(sum(1, "abc")).toBe("1abc");
// });
// });
