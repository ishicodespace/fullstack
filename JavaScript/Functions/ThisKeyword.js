//this refers to the calling object, here student is calling
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
    name: "object 1"
}
const ob2 = {
    name: "object 2"
}
ob1.getThis = getThis;
ob2.getThis = getThis;

console.log(ob1.getThis());
console.log(ob2.getThis());




