//callback function is a function that is passed as a parameter to another function
//arrow functions are used as a value
//arrow functions are also used in higher order functions to pass as a parameter
//const function = (argument1, argument2..) => {function definition}

const sum = (a, b) => {
  //nameless functions
  return a + b;
};

console.log(sum(3, 4));

// () are optional in single argument
const cube = (n) => {
  return n * n * n;
};

//use () when no arguments
const print = () => {
  console.log("hello");
};

//implicit return means when a function is only returning a value
const mul = (a, b) => (a * b)
//no return keyword implicitly (automatically knows what to return)

