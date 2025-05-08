import { analyzeArray } from "./analyzeArray";

describe('analyzeArray ', () => {
  const array = [4,1,8,3,4,2,6];

  test('should calc length right', () => {
    expect(analyzeArray(array).length).toBe(7);
  });

  test('should calc average right', () => {
    expect(analyzeArray(array).average).toBe(4);
  });

  test('should calc min right', () => {
    expect(analyzeArray(array).min).toBe(1);
  });

  test('should calc max right', () => {
    expect(analyzeArray(array).max).toBe(8);
  });

  test('throw error when argument is not array', () => {
    expect(() => analyzeArray(false)).toThrow(/arrays only/);
  });

  test('throw error when argument is empty array', () => {
    expect(() => analyzeArray([])).toThrow(/length of array/);
  });
});