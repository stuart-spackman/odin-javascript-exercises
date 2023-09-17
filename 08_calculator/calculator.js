const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = (arr) => {
  let product = 1;
  for (const ele of arr) {
    product *= ele;
  }
  return product;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = (a) => {
  return a === 0 ? 1 : a * factorial(a - 1);
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
