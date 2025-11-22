//arr.forEch(callback function definition or function name)-> will run for each element
//callbackFn: A function to execute for each element in the array
let arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
    console.log(element)
})

//or this way
function print(el) {
    console.log(el);
}
arr.forEach(print);

//another example
let obj = [
    {
        name: "ishika"
    },
    {
        name:"ishi"
    }
]

obj.forEach((element) => {
    console.log(element.name);
})