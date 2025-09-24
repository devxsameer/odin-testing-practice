import { caesarCipher } from "./caesarCipher";

describe("caesarCipher", () => {
  test("no arguments", () => {
    expect(caesarCipher()).toBe("");
  });

  test("no shift factor passed", () => {
    expect(caesarCipher("JavaScript")).toBe("JavaScript");
  });

  test("shift normally", () => {
    expect(caesarCipher("JavaScript", 1)).toBe("KbwbTdsjqu");
  });

  test("wraps around lowercase letters", () => {
    expect(caesarCipher("xyz", 2)).toBe("zab");
  });

  test("wraps around uppercase letters", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });

  test("leaves non-letters unchanged", () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });

  test("works with negative shift", () => {
    expect(caesarCipher("bcd", -1)).toBe("abc");
    expect(caesarCipher("ABC", -2)).toBe("YZA");
  });
});
