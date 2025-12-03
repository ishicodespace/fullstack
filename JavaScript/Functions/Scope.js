//function scope
//functions defined inside a function are not accessible from outside the function
let sum = 13; //global scope
function calSum(a, b) {
    let sum = a + b;
    console.log(sum);
}
calSum(5, 7);
console.log(sum); //13



//block scope: variables defined inside a block cannot be accessed from outside the block
{
    let a = 24;
}
try {
    console.log(a); //ReferenceError: a is not defined
}
catch (e) {
    console.log(e.message);
}

//lexical scope: inner functions can use variables defined in their outer functions if they are declared in the outer function
function outer() {
    let a = 10;
    let b = 20;
    function inner() { //function scope: cannot be called from outside outer()
        console.log(a);
        console.log(b);
    }
    inner();
}
outer();

//can be used before declaration due to hoisting
//inner function variables are not accessible in the outer function
function outer2() {
  function inner2() {
    console.log(a);
    console.log(b);
    }
    let a = 10;
    let b = 20;
  inner2();
}
outer2();