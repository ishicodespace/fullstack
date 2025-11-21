//The keywords let and var differ primarily in their scope and hoisting behavior.

//SCOPE

//var is function-scoped, it can be accessed only in the function in which it is declared
function print() {
  if (true) {
    var a = 10;
  }
  console.log(a);
}
print(); //10 is printed

//let is block-scoped, it can be accessed only in the block in which it is declared
//block could be a function, or loop or any block
function exampleLet() {
  if (true) {
    let y = 20;
  }
  // console.log(y); // This would throw a ReferenceError (y is not defined outside the if block)
}
exampleLet();

//HOISTING

//var is hoisted and initialized with undefined if used before declaration
console.log(name); //undefined
var name = "ishika";
console.log(name); //ishika

//let is hoisted but not initialized and throws error if used before declaration
// console.log(num); //This would throw a ReferenceError
let num = 10;
console.log(num); //10

//REDECLARATION

//var allows redeclaration of the same variable
var x = 10;
var x = 20;
console.log(x);

//let does not allow redeclaration of the same variable
let y = 10;
// let y = 20; //gives error
