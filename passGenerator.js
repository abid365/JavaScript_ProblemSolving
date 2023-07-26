/*
 todo Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters 
 */

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "@#$%^&*()_+~`|}{[]:;?><,./-=";

const allChar = upperCase + lowerCase + numbers + specialChar;

let password = "";

const passGenerator = (length) => {
  for (let i = 0; i <= length; i++) {
    password += allChar[Math.floor(Math.random() * allChar.length + 1)];
  }
  return password;
};

const number = 8;
const result = passGenerator(number);
console.log(result);
