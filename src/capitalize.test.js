import { capitalize } from "./capitalize";

describe("capitalize", () => {
  test("returns empty string if no input", () => {
    expect(capitalize()).toBe("");
  });
  test("capitalizes normal string", () => {
    expect(capitalize("javascript")).toBe("Javascript");
  });
  test("handles already capitalized", () => {
    expect(capitalize("Javascript")).toBe("Javascript");
  });

  test("handles mixed case", () => {
    expect(capitalize("jAVaScript")).toBe("JAVaScript");
  });

  test("handles empty string explicitly", () => {
    expect(capitalize("")).toBe("");
  });
});
