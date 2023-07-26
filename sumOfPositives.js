/* 
todo: Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
*/

const filterNumbers = (arr) => {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    } else {
      return "No positives numbers in the array";
    }
  }
  return sum;
};
const input = [2, -5, 10, -3, 7];
const result = filterNumbers(input);
console.log(result);
