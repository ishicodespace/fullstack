//arr.every(function definition or function name)
//returns true if all the elements satisfy the condition otherwise false

let numbers = [2, 4, 6, 8, 10];
console.log(numbers.every((el) => {
    return el % 2 == 0;
}));