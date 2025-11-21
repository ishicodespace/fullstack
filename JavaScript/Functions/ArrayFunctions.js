//callback function is a function passed as an argument to another function

//for each function
let arr = [2, 4, 5, 6, 7, 11];

//map
console.log(arr);
arr = arr.map(
  update = (el) => {
    return el * 7;
  }
);
console.log(arr);

//filter
arr = arr.filter(function (el) {
  return el % 2 == 0;
});

console.log(arr);
console.log(arr);


console.log(
  arr.reduce((sum, a) => {
    return sum + a;
  })
);
