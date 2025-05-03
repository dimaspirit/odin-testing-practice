export function capitalize(string) {
  if(typeof string !== 'string') throw new Error('The value should be a string');
  if(string.trim() === '') throw new Error('The value should not be empty');
  return `${string[0].toUpperCase()}${string.substring(1)}`;
}