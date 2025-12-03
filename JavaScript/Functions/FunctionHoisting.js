//Function declarations are hoisted
console.log(add(4, 10)); //using before declaration

function add(a, b) {
  return a + b;
}
console.log(add(4, 10));

//Function expressions are not hoisted
// console.log(multiply(4, 10)); //using before declaration -> Error: Cannot access 'multiply' before initialization

let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 10));

