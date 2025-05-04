import { capitalize, reverseString } from "./helpers";

describe('Capitalize ', () => {
  test('should work correct', () => {
    expect(capitalize('welcome')).toBe('Welcome');
  });

  test('return error when value has invalid type', () => {
    expect(() => capitalize(true)).toThrow(/string/);
  });

  test('return error when value is empty', () => {
    expect(() => capitalize('   ')).toThrow(/empty/);
  });
})

describe('reverseString', () => {
  test('should work correct', () => {
    expect(reverseString('welcome')).toBe('emoclew');
  });
  
  test('return error when value has invalid type', () => {
    expect(() => reverseString(null)).toThrow(/string/);
  });
  
  test('return error when value is empty', () => {
    expect(() => reverseString('   ')).toThrow(/empty/);
  });
})