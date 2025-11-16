//DATA TYPES
//number
let a = 10;
//boolean
let isAlive = true;
//string
let name = "Ishika";
//undefined: variable declared but not assigned a value -> javascript doesnt know its value
let size;
//null: variable intentionally assigned to have no value
let address = null;
//object: key-value pairs
let person = {
  firstName: "John",
  lastName: "Doe",
};
//array
let numbers = [1, 2, 3, 4, 5];
let info = ["Ishika", 21, true]; //mixed array
let arr = []; //empty array
console.log(info[0][0]);





//function
function greet() {
  console.log("Hello, World!");
}
//symbol
let uniqueId = Symbol("id");

//checking data types using typeof operator
console.log(typeof a);

//template literals: to evaluate variables inside strings
let greeting = `My name is ${name} and I am ${a + 11} years old.`;
console.log(greeting);

//double equals operator (==) checks only value
console.log(5 == "5"); //true
console.log(0 == ""); //true
console.log(null == undefined); //true

//triple equals operator (===) checks value and data type
console.log(5 === "5"); //false
console.log(0 === ""); //false
console.log(null === undefined); //false

//every number has a true or false value associated with it so
// console.log(null === undefined); //false
// it gives false because null has a value of 0 and undefined has no value associated with it.

let s = "ishika";
if (undefined) {
  console.log("safe");
}
else {
  console.log("not safe");
}

//console methods
// console.log("this is a log message")
// console.error("this is an error message")
// console.warn("this is a warning message")

//input in javascript
// alert("this is an alert")
// let age = prompt("Enter something: ")
// console.log("User input is: " + age)

// let uname = prompt("enter name");
// let uage = prompt("enter age");
// alert(`${uname} is ${uage} years old`);

let num1 = 101
let num2 = 122
if(num1%10==1&&num2%10==1){
  console.log("both numbers end with 1")
}
else {
  console.error("both numbers do not end with 1")
}