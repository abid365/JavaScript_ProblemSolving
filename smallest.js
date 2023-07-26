/*
 todo: Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. 
 */

const secondSmallest = (arr) => {
  const result = arr.sort((a, b) => a - b)[1];
  return result;
};

const inputValue = [93, 86, 10, 6, 6, 91, 37];
const finalResult = secondSmallest(inputValue);
console.log(finalResult);
