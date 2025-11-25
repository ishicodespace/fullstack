//synchronous nature where code is executed line by line
//in synce one by one manner
let a = 5;
console.log(a);
let b=10;
console.log(b);
console.log(a + b);


//function calls are also executed in a single thread manner
function greet() {
    console.log("Hello");
    farewell();
    console.log("Goodbye");
}
function farewell() {
    console.log("See you later!");
}

greet();

//execution order:
//1. greet() is called
//2. "Hello" is logged
//3. farewell() is called from within greet()
//4. "See you later!" is logged
//5. farewell() completes and returns to greet()
//6. "Goodbye" is logged
//7. greet() completes

//no two functions run at the same time, one must complete before the next starts

//but when we use functions like setTimeout, setInterval
//we make javascript behave in an asynchronous manner


setTimeout(() => {
    console.log("Hello");
}, 2000)
setTimeout(() => {
  console.log("Hello");
}, 2000);
console.log("HELLO");

//the setTimeout function is sent to the browser to handle the timer
//while the main thread continues executing the remaining code
//after 2 seconds, the browser places the function on top of the callstack
//javascript then executes it when the callstack is clear



