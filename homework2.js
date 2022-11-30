// ex1 Given two objects. Write a function that performs shallow compare.
const a = {b: 1};
const b = {a: 1};

function shallowCompare (one, two) {
    if (Object.keys(one).length !== Object.keys(two).length) 
        return false;

    for (let key in one) {
        if (one[key] !== two[key]) 
            return false;   
    }
        
    return true;
}

const result = shallowCompare(a, b);

console.log(result);
// ex2 Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
// word&quot;) is a word or phrase without a repeating letter.
function isIsogram (word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return false;
      } 
    }  
  }

  return true;
}

const result = isIsogram("wword");

console.log(result);
// ex3 Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.
function getFibonacciNumber(number) {
  let fibonacciNumber = 0;
  const constant = (1 + Math.sqrt(5)) / 2;

  if (number > 2) {
    fibonacciNumber = 1;

    for (let i = 2; i < number; i++) {
      fibonacciNumber = fibonacciNumber * constant;
      fibonacciNumber = Math.round(fibonacciNumber);
    }
    return fibonacciNumber;
  } else if (number === 0) {
    return 0;
  } else if (number === 1 || number === 2) {
    return 1;
  }

  return NaN;
}

const result = getFibonacciNumber(20);

console.log(result);
// ex4 Insert a number. Calculate product and sum of the digits of the number. If product is
// divisible by the sum, print the quotient, otherwise print the remainder.
function calculateDivisibleSum (number) {
  if (number === 0) return "Cannot calculate";

  let sum = 0;
  let calculate = 1;

  while (number > 0) {
    let digit = number % 10;
    number = (number - digit) / 10;

    sum = sum + digit;
    calculate = calculate * digit;
  }
  if (calculate % sum === 0) {
    return `Quotient is ${calculate / sum}`;
  } else return `Remainder is ${calculate % sum}`;
}

const result = calculateDivisibleSum(1233);

console.log(result);
// ex5 Write a program to print X star pattern series.
function matrix (num) {
  let horizontal = "";
  let vertical = "";
  let symbol = "X";
  
  let right = num - 1;
  let left = 0;

  for (let i = 0; i < num; i++){
    for (let j = 0; j < num; j++) {
      if (j === left || j === right) {
        horizontal += symbol + " ";
      } else {
        horizontal += " " + " ";
      }  
    }
    vertical += horizontal + "\n";
    horizontal = "";
    right -= 1;
    left += 1;
  }
  
  return vertical;
}

const result = matrix(5);

console.log(result);
