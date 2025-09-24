import { reverseString } from "./reverseString";

describe("reverse string", () => {
  test("return empty string if no input", () => {
    expect(reverseString()).toBe("");
  });
  test("reverse normal string ", () => {
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
  });
  test("handles single character", () => {
    expect(reverseString("A")).toBe("A");
  });

  test("handles empty string explicitly", () => {
    expect(reverseString("")).toBe("");
  });

  test("works with spaces and punctuation", () => {
    expect(reverseString("Hello!")).toBe("!olleH");
    expect(reverseString("hi there")).toBe("ereht ih");
  });
});
