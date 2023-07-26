/*
 todo: Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
  */
const twoSum = (arr, target) => {
  const previousValues = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    const currentNumber = arr[i];
    const neededValue = target - currentNumber;
    const indexTwo = previousValues[neededValue];
    // console.log(previousValues);
    if (indexTwo != null) {
      return [indexTwo, i];
    } else {
      previousValues[currentNumber] = i;
    }
  }
};

const array = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = twoSum(array, targetValue);
console.log(result);
