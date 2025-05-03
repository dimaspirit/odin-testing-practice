import { capitalize } from "./helpers";

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