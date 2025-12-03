//spread operator
//expands an iterable (like an array) into individual elements
//...arr

let arr=[1,2,3,4,5];
console.log(...arr); //1 2 3 4 5

let arr2 = [...arr, 6, 7, 8];
console.log(arr2); //[1,2,3,4,5,6,7,8]

let arr3 = [...arr, ...arr2];
console.log(arr3); //[1,2,3,4,5,1,2,3,4,5,6,7,8]

//spread in strings
let str = "ishika";
console.log(...str); //i s h i k a

//spread in objects
let obj={a:1, b:2};
let obj2={...obj, c:3, d:4};
console.log(obj2); //{a:1, b:2, c:3, d:4}

//rest operator
//take multiple arguments and bundle them into an array
//function(...args)

function sum(...nums) {
    for(let i=0; i<nums.length; i++) {
        console.log(nums[i]);
    }
}
sum(1, 2, 3, 4, 5);