/*
 todo: todo Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
 */

const reverseStr = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

const result = reverseStr("hello world");
console.log(result);
