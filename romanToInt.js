/* 
todo: Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. 
*/

const romaToInteger = (romaNumSys) => {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let previousValue = 0;
  for (let i = 0; i <= romaNumSys.length - 1; i++) {
    let currenSymbol = romaNumSys[i];
    let currentValue = romanValues[currenSymbol];
    if (currentValue < previousValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
    previousValue = currentValue;
  }
  return result;
};

const romaNum = "XXI";
const answer = romaToInteger(romaNum);
console.log(answer);
