//get the count-el element then store it in a countEl variable
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    //set countEl's innerText to the count
    countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
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
//var -> can be declared and updated multiple times
//let -> can be declared once and updated multiple times
//const -> can be declared once and updated once
// const d = 20;
// const d = 80;
// console.log(d)
// let a = 20;
// let a = 10;
//Q) why does it display "undefined" console.log(a); var a = 10; if it has global scope

//let a=10;
//let b="hello";
//console.log(a + b); -> strings always take precedence so it will be converted to a string
//let wish="I'd like to learn \"JavaScript\" "; -> use escape character \ to use double/single quotes inside a string
//tells js next character after \ is not a string