let cars = ["BMW", "Audi", "Mercedes"];
// cars is a reference variable to the array object in memory, it stores the address 
//console.log([0] == [0]); //false because both are different array at different memory locations

cars.push("Volvo"); //adds element at the end
console.log(cars); //["BMW", "Audi", "Mercedes", "Volvo"]

cars.pop(); //removes last element
console.log(cars); //["BMW", "Audi", "Mercedes"]

cars.unshift("Toyota"); //adds element at the beginning
console.log(cars); //["Toyota", "BMW", "Audi", "Mercedes"]
cars.shift(); //removes first element
console.log(cars); //["BMW", "Audi", "Mercedes"]

let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(nums);

let tictactoe = [
  ["X", "null", " O"],
  [" ", "O", " "],
  ["0", " ", "X"],
];
console.log(tictactoe);

let arr = [4, 5, 3, 3, 5, 3, 4];
let n = 3;
console.log(arr.slice(0, n + 1));

// for of loop
let heroes = [
  ["Spiderman", "Ironman", "Hulk", "Thor"],
  ["Batman", "Superman", "Flash", "Aquaman"],
];
for (let i of heroes) {
  for (j of i) {
    console.log(j);
  }
}

//Find the largest number in an array with only positive numbers
let a = [3, 5, 2, 2, 55, 32, 12, 344, 422];
let max = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
}
console.log(max);

//factorial
let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log(fact);

//sum of digits
num=5
let sum = 0;
while (number != 0) {
  sum = sum + (number % 10);
  number = parseInt(number / 10);
}
console.log(sum);

//count digits
num = 12345;
let count = 0;
while (num != 0) {
  count++;
  num = parseInt(num / 10);
}
console.log(count);
