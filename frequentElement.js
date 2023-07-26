/*
todo: Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
 */

const mostFrequentElement = (arr) => {
  const freqObj = {};
  let maxCount = 1;
  let maxElement = arr[0];

  for (let i = 0; i <= arr.length - 1; i++) {
    const element = arr[i];
    // console.log(element);
    if (freqObj[element]) {
      freqObj[element]++;
    } else {
      freqObj[element] = 1;
    }
    if (freqObj[element] > maxCount) {
      maxElement = element;
      maxCount = freqObj[element];
    }
  }
  //   console.log(freqObj);
  return `Frequent Element is ${maxElement} and Count ${maxCount}`;
};

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4];
const result = mostFrequentElement(inputArray);
console.log(result);
