//waits -> executes -> waits again -> executes again -> so on
//executes multiple times
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
// clearInterval(id); //to stop executing

