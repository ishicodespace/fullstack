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

// console.log(a);
// var a = 10;
// console.log(a);
// var a, b;
// function add() {
//     a = 5;
//     b = 10;
//     console.log(a + b);
// }
// add();
// var -> can be declared and updated multiple times
// let -> can be declared once and updated multiple times
// const -> can be declared once and updated once
// const d = 20;
// const d = 80;
// console.log(d)
// let a = 20;
// let a = 10;
// Q) why does it display "undefined" console.log(a); var a = 10; if it has global scope

// let a=10;
// let b="hello";
// console.log(a + b); -> strings always take precedence so it will be converted to a string
// let wish="I'd like to learn \"JavaScript\" "; -> use escape character \ to use double/single quotes inside a string
// tells js next character after \ is not a string

//HOISTING CONCEPT
// console.log(x); //undefined
// var x = 5;
// console.log(x); //5
//in hoisting variable declarations using var are moved to the top of their scope but not the assignments

// console.log(y); //ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); //10
//in hoisting variable declarations using let and const are not moved to the top of their scope
//chalo ab hum samajhte hain ki scope hota kya hai
//GLOBAL SCOPE AND LOCAL SCOPE
// var globalVar = "I am a global variable";
// function checkScope() {
//     var localVar = "I am a local variable";
//     console.log(globalVar); //accessible
//     console.log(localVar); //accessible
// }
// checkScope();
// console.log(globalVar); //accessible
// console.log(localVar); //not accessible -> ReferenceError
//block scope
// {
//     let blockVar = "I am a block-scoped variable";
//     console.log(blockVar); //accessible
// }
// console.log(blockVar); //not accessible -> ReferenceError
//isse pata chalta hai ki var ka scope function tak hota hai
//let and const ka scope block tak hota hai
//aur jo block ke bahar declare kiye gaye hain wo global scope ke hote hain

//FUNCTIONS
//function declaration
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 10));
//function expression
// const multiply = function (a, b) {
//     return a * b;
// }
// console.log(multiply(5, 10));
//iss se hum yeh samajh sakte hain ki function declaration ko hum kahi bhi call kar sakte hain
//jabki function expression ko hum uske baad hi call kar sakte hain jahan pe wo defined hai
//iska yeh matlab hai ki function expressions hoisting ke under nahi aate hain matlab unka declaration upar nahi chala jata
//chalo example dekhte hain
// console.log(declaredFunc(2, 3)); //works
// console.log(expressionFunc(2, 3)); //ReferenceError
//to iska use kar ke hum yeh samajh sakte hain ki function declarations hoisting ke under aate hain
//jabki function expressions hoisting ke under nahi aate hain
//to function expression ka use tab karte hain jab hume function ko ek variable mein store karna hota hai
//jaise ki humne multiply function ko kiya hai
