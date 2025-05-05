import { calculator } from "./calculator";

describe('Calculator ', () => {
  test('add should work correct', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('subtract should work correct', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
  });

  test('divide should work correct', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('can\'t divide any number by zero', () => {
    expect(() => calculator.divide(4, 0)).toThrow(/zero/);
  });

  test('multiply should work correct', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
});