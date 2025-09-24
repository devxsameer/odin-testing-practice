import { calculator } from "./calculator";

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 5)).toBe(7);
    expect(calculator.add(-3, 7)).toBe(4);
    expect(calculator.add(-3, -7)).toBe(-10);
  });

  test("subtracts one number from another", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
    expect(calculator.subtract(4, 10)).toBe(-6);
    expect(calculator.subtract(-5, -2)).toBe(-3);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(3, 5)).toBe(15);
    expect(calculator.multiply(-3, 5)).toBe(-15);
    expect(calculator.multiply(-3, -5)).toBe(15);
    expect(calculator.multiply(0, 100)).toBe(0);
  });

  test("divides one number by another", () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(5, 10)).toBe(0.5);
    expect(calculator.divide(-10, 2)).toBe(-5);
    expect(calculator.divide(-10, -2)).toBe(5);
  });

  test("division by zero returns Infinity", () => {
    expect(calculator.divide(5, 0)).toBe(Infinity);
    expect(calculator.divide(-5, 0)).toBe(-Infinity);
    expect(calculator.divide(0, 0)).toBeNaN();
  });
});
