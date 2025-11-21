console.log(typeof [2, 4, 5]); //object

//Object Literals are collection of properties
//has key-value pairs which are called properties
const student = {
  name: "Ishika",
  age: 21,
  country: "India",
  marks: [90, 98, 85, 88, 76], //arrays can also be part of objects
};
console.log(student); //printed in random order

//another example
const post = {
  username: "ishika",
  content: "Hey!",
  likes: 34,
  reposts: 23,
  tags: "#goodday",
};

//adding new key-value pair
student.grade = "A++"; //object.newKey:newValue

//deleting key-value pair
delete student.age;

//get values
console.log(student["name"]); //object["key"]
console.log(student.name);

//java automatically converts object to string even when a number is a key it is converted to string
let obj = {
  1: "one",
  2: "two",
  null: "null value",
  undefined: "undefined value",
};
console.log(obj[1]); //1 is converted to "1"
console.log(obj[null]); //null is converted to "null"
console.log(obj.null);
// console.log(obj.1); //gives error cause dot does not convert number to string

//object of objects
const classInfo = {
  ishika: {
    grade: "A+++",
    city: "",
  },
  aarna: {
    grade: "B",
  },
};

//array of objects
const classA = [
  { name: "ishika", grade: "A+++" },
  { name: "aarna", grade: "B" },
  {},
];
