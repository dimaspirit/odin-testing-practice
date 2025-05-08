
const analyzeArray = (array) => {

  if(!Array.isArray(array)) {
    throw new Error('Function accepts arrays only');
  }

  if(array.length === 0) {
    throw new Error('Minimal length of array is one');
  }

  let min, max, average;
  let length = array.length;

  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element;

    if(index === 0) {
      min = element;
      max = element;
    }

    if(element < min) {
      min = element;
    }

    if(element > max) {
      max = element;
    }
  }

  average = Math.floor(sum / length);
  
  return {
    length,
    min,
    max,
    average,
  }
}

const arrayData = analyzeArray([1,8,3,4,2,6]);
console.log(arrayData);

export { analyzeArray };