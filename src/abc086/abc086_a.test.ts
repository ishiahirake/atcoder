import { expect, it } from "bun:test";
import { solution } from "./abc086_a";

it("case 1", () => {
  expect(solution(3, 4)).toBe("Even");
});

it("case 2", () => {
  expect(solution(1, 21)).toBe("Odd");
});
