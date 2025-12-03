let square = (n) => n * n;
console.log(square(9));

let id = setInterval(() => {
  console.log("hello");
}, 1000);
setTimeout(() => {
  clearInterval(id);
}, 5050);
