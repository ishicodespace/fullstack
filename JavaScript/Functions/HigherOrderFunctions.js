//a function that does one or both:
//takes one or more functions as arguments
//returns a function

//higher order function that takes function as argument
let greet = function () {
    console.log("hello");
}

function multipleGreet(func, count) { //higher order function
    for (let i = 1; i <= count; i++){
        func();
    }
}

multipleGreet(greet, 5); //call greet 5 times

//higher order function that returns a function
function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(n % 2 != 0);
        }
    }
    else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log("wrong request");
    }
}

let func = oddEvenTest("even")
func(9);
func = oddEvenTest("odd")
func(9);