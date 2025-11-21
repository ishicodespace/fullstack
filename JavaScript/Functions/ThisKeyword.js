let obj = {
    name: "Ishika",
    greet: function() {
        console.log("Hello! " + this.name);
    }
}
console.log(obj.greet()); // Hello, ishika

console.log(this); // in browser, this refers to the global window object
