let str = "  hello"
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());


//string methods with arguments
console.log(str.indexOf("l"));

//method chaining
console.log(str.trim().toUpperCase().indexOf("L"));

//string slicing: returns a part of the original string
//slice(startIndex, endIndex) -> endIndex is not included
//slice(-2) converts to slice(str.length-2)


//replace method: replaces first occurrence of a substring with another substring


//repeat method: repeats the string n times
let str2 = "ha";
console.log(str2.repeat(5));