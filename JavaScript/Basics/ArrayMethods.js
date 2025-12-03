let cars = ["BMW", "Audi", "Mercedes"];
let mix = ["ishika", 34, "2", 345.2, true];
//cars is a reference variable to the array object in memory, it stores the address
//console.log([0] == [0]); //false because both are different array at different memory locations

//indexOf
console.log(cars.indexOf("BMW")); //0

//includes
console.log(cars.includes("bmw")); //false

//concat
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a.concat(b)); //join b after a

//push, pop, unshift, shift
cars.push("Volvo"); //adds at the end
console.log(cars); //["BMW", "Audi", "Mercedes", "Volvo"]

cars.pop(); //removes last element
console.log(cars); //["BMW", "Audi", "Mercedes"]

cars.unshift("Toyota"); //adds at the beginning
console.log(cars); //["Toyota", "BMW", "Audi", "Mercedes"]

cars.shift(); //removes first element
console.log(cars); //["BMW", "Audi", "Mercedes"]

//reverse
console.log(cars.reverse()); //original array changed
console.log(cars);

//slice
let arr = [3, 4, 2];
console.log(arr.slice(-2));
console.log(arr); //[3,4,2]

//splice: removes/replaces/add elements in place
//splice(start,deleteCount,item0,item1...itemN)
let c = [1, 2, 3, 4, 5];
console.log(c.splice(5, 0, 6, 7, 8));
console.log(c); //[1,2,3,4,5,6,7,8]
console.log(c.splice(2, 3, 10, 11)); //removes 3 elements from index 2 and adds 10,11
console.log(c); //[1,2,10,11,6,7,8]

//sort: works for strings
let fruits = ["Banana", "Apple", "Mango", "Pineapple"];
console.log(fruits.sort()); //original array changed
console.log(fruits);

//array references
let array = [1, 2];
let array2 = array; //now both will point to same array and changes made to either will reflect in both
array2.push(3);
console.log(array); //[1,2,3]
console.log(array === array2); //true
console.log([1] == [1]); //false

//nested array
let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(nums);

// for of loop
let heroes = [
  ["Spiderman", "Ironman", "Hulk", "Thor"], //i=0, j=0,1,2,3
  ["Batman", "Superman", "Flash", "Aquaman"], //i=1, j=0,1,2,3
  ["Wolverine", "Deadpool", "Magneto", "Professor X"], //i=2, j=0,1,2,3
];
for (let i of heroes) {
  for (j of i) {
    console.log(j);
  }
}
