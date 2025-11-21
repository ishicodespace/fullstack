//Global Scope: accessible anywhere
//Function Scope: variable defined inside a function are not accessible outside the function

let sum = 20; //global scope

function add(a, b) {
    let sum = a + b; //function scope
    return sum;
}

console.log(sum);

//Block Scope: variables declared inside a {} block cannot be accessed from outside the block

{
    let a = 10;
}
console.log(a); //error


{
  var a = 10; //block scope does not apply on var
}
console.log(a); //10

//Lexical Scope