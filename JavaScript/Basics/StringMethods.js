//strings are immutable
let s = "  Hello";

//trim
console.log(s.trim()); // does not change orignial string str
//uppercase
console.log(s.toUpperCase());
//lowercase
console.log(s.toLowerCase());

let str = "welcome";

//string methods with arguments
//indexOf
console.log(str.indexOf("come")); //returns index

//method chaining
console.log(str.trim().toUpperCase().indexOf("l")); //left to right

//string slicing: returns a part of the original string
//slice(startIndex, endIndex) -> endIndex is not included
//slice(-2) converts to slice(str.length-2)
console.log(str.slice(0, 4));
console.log(str.slice(-2));

//replace method: replaces first occurrence of a substring with another substring
console.log(str.trim().replace("e", "a"));

//repeat method: repeats the string n times
let str2 = "ha";
console.log(str2.repeat(5));

//length of string with single space
console.log(" ".length);
