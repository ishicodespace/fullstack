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

//VARIABLE HOISTING
console.log(a); //undefined due to hoisting of var
var a = 10;
console.log(a);

//using let
// console.log(b); //ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// console.log(b);

//using const
// console.log(c); //ReferenceError: Cannot access 'c' before initialization
// const c = 10;
// console.log(c);

//Q) Why does var show undefined but let and const show ReferenceError when accessed before initialization?
//A) Because var declarations are hoisted and initialized with undefined, while let and const declarations are hoisted but not initialized. Accessing them before initialization results in a ReferenceError.

function rollDice() {
  rand = (Math.floor)(Math.random() * 6) + 1;
  return rand;
}
console.log(rollDice());


let greet = "hello";
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreet() {
    console.log(greet); //lexical scope
  }
  innerGreet();
}
console.log(greet);
changeGreet();

function sumOfN(n) {
  return n * (n + 1) / 2;
}

console.log(sumOfN(2));


const arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
console.log(arrayAverage([34, 3, 7, 42, 2]));



  function isEven(num) {
    return num % 2 == 0;
}
console.log(isEven(8)); 