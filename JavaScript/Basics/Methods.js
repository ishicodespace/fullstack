//actions that can be performed on objects
//functions defined inside objects are called methods
//methods defined in key-value pairs

const calculator = {
  add: function (a, b) {
    return a + b;
  },
    subtract: function (a, b) {
        return a - b;
  },
    multiply: function (a, b) {
      return a * b;
  },
    divide: function (a, b) {
      return a / b;
  },
};

console.log(calculator);// {  add: [Function: add],
//   subtract: [Function: subtract],
//   multiply: [Function: multiply],
//   divide: [Function: divide] }
console.log(calculator.add(2, 3));

//arrays and strings are internally objects
[1, 2, 3].pop(); //array object and method pop

//shorthand
const calculato2 = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
} 