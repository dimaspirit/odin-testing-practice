function isString(value) {
  return (typeof value === 'string') ? true : false;
}

function isStringEmpty(string) {
  return (string.trim() === '') ? true : false;
}

function validateString(value) {
  if(!isString(value)) throw new Error('The value should be a string');
  if(isStringEmpty(value)) throw new Error('The value should not be empty');
}

export function capitalize(value) {
  validateString(value);
  return `${value[0].toUpperCase()}${value.substring(1)}`;
}

export function reverseString(value) {
  if(!isString(value)) throw new Error('The value should be a string');
  if(isStringEmpty(value)) throw new Error('The value should not be empty');
  return [...value].reverse().join("");
}