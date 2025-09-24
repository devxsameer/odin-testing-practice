import { analyzeArray } from "./analyzeArray";

describe("analyze array", () => {
  test("no arguments", () => {
    expect(analyzeArray()).toEqual({
      average: null,
      min: null,
      max: null,
      length: null,
    });
  });

  test("empty array", () => {
    expect(analyzeArray([])).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });

  test("normal case", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("works with negatives", () => {
    expect(analyzeArray([-5, -2, -8, -1])).toEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 4,
    });
  });
});
