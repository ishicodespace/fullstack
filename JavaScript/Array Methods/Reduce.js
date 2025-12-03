//reduce method reduces the array to a single value
//arr.reduce(function definition or function name, initial value(optional))

console.log(
    [1, 2, 3, 4, 5].reduce(function (acc, el) {
        console.log(acc);
    return acc + el;
  })
);

//acc=empty value,el=1 return 1
//acc=1,el=2 return 3
//acc=3,el=3 return 6
//acc=6,el=4 return 10
//acc=10,el=5 return 15


//find minimum value in an array
let arr = [5, 2, 8, 1, 4];
console.log(arr.reduce((acc,el) => {
    if (acc < el) {
        acc = el;
    }
    return acc;
}))