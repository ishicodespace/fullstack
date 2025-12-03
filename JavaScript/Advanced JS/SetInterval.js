//waits -> executes -> waits again -> executes again -> so on
//executes multiple times after every interval of time
//setInterval(function, timeout)

setInterval(
    () => {
        console.log("hi hi hi");
    }
    , 4000
);

let id = setInterval(() => {
  console.log("hello");
}, 4000);

console.log(id);

//to stop setInterval we use clearInterval function
//clearInterval(intervalID)
//here interval is cleared after 10 seconds
setTimeout(() => {
  clearInterval(id); //to stop executing
}, 5000);
