import {describe, test, expect} from "vitest";
import {increase, decrease} from "./counterTransformer";

describe("counterTransformer", () => {
  test("should increase value ", () => {
    expect(increase(1)).toBe(2);
    expect(increase(6)).toBe(8);
    expect(increase(12)).toBe(15);
  });

  test("should decrease value", () => {
    expect(decrease(4)).toBe(3);
    expect(decrease(8)).toBe(6);
    expect(decrease(21)).toBe(18);
  });
});
