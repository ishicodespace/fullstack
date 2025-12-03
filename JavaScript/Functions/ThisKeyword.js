//FUNCTIONS AND THIS KEYWORD
//this in function refers to the calling object, here student is calling
let student = {
  name: "Ishika",
  greet: function () {
    console.log("Hello! " + this.name); //the object's parameter that we have to use
  },
};
console.log(student.greet()); // Hello, ishika

console.log(this); //when there is no object then this prints window object in browser

function getThis() {
  return this;
}
const ob1 = {
  name: "object 1",
};
const ob2 = {
  name: "object 2",
};
ob1.getThis = getThis;
ob2.getThis = getThis;

console.log(ob1.getThis()); //here this refers to ob1
console.log(ob2.getThis()); //here this refers to ob2

//THIS IN ARROW FUNCTIONS
//this in arrow function does not refer to the calling object
//arrow functions see lexical scope for this value
//inherit the parent scope
//in arrow function this refers to the surrounding context
const student2 = {
  name: "ishika",
  marks: 90,
  //for function this refers to the calling object
  getName: function () {
    console.log(this); //student2 object
  },
  //arrow function
  getMarks: () => {
    console.log(this); //window object
  },
  getInfo1: function () {
    //arrow function 
    setTimeout(() => {
      console.log(this); //student2 object is the calling object of parent function 
    }, 1000);
  },
  getInfo2: function () {
    //normal function
    (setTimeout = function () {
      console.log(this); //window object is the calling object cause setTimeout is a window method
    }),
      1000;
  },
};
student2.getName();
student2.getMarks();

//for getMarks, this is used in parent scope
//parent is student2 object
//student2 is the onject whose scope is global
//so this refers to the global object
//in browser, global object is window

student2.getInfo1(); //this refers to student2 object
student2.getInfo2(); //this refers to window object