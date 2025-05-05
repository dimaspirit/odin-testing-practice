const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    if(b === 0) throw new Error('You can\'t divide any number by zero');
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

export { calculator };