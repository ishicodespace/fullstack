//filter(function definition or function name)
// if filter is true then it adds that element otherwise does not

let arr = [2, 4, 5, 6, 36, 22];

//filter arr to make a newArr that will have only even nos
let newArr = arr.filter((el) => {
    return el % 2 == 0;
})
console.log(newArr)

let newArr2 = arr.filter((el) => {
  return el >5;
});
console.log(newArr2);