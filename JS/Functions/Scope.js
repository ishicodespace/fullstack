//function scope
//functions defined inside a function are not accessible from outside the function
let sum = 13; //global scope
function calSum(a, b) {
    let sum = a + b;
    console.log(sum);
}
calSum(5, 7);
console.log(sum);



//block scope: variables defined inside a block cannot be accessed from outside the block
{
    let a = 24;
}
console.log(a);


//variable