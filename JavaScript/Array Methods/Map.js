//map(function definition or function name)
//returns all the elements after applying the function on each element

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(function(el) {
    return el + 2; 
})
console.log(newArr);

//calculate gpa
let students = [
  {
    name: "a",
    marks: 95,
  },
  {
    name: "b",
    marks: 97,
  },
  {
    name: "c",
    marks: 99,
  },
];

let gpa = students.map((el) => {
    return el.marks / 10;
})
console.log(gpa)