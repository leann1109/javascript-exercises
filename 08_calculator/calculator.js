const add = function(num1, num2) {
  let result = num1 + num2;
	return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
	return result;
};

const sum = function(num) {
	let result = 0;
  if (num.length === 0) {
    return result;
  }
  for (i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
};

const multiply = function(...args) {
  let result = 1;
  for (i = 0; i < args.length; i++) {
    result *= args[i];
  }
	return result;
};

const power = function(num, numTimes) {
	let result;
  let currentResult;
  for (i = 1; i < numTimes; i ++) {
    currentResult = num * num;
    result = currentResult * num;
  }
  return result;
};

const factorial = function(n) {
	let result = 1;
  if (n === 0) {
    return result = 1;
  }
  
  for (i = n; i > 0; i--) {
    result *= i;
    }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
