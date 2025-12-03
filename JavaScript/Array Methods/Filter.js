//arr.filter(function definition or function name)
//if true, it will keep the element otherwise not

let nums=[10, 23, 45, 60, 78, 90, 11, 15];

let evenNums = nums.filter(function(el) {
    return el % 2 === 0;
});