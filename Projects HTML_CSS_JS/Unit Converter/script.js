let btn = document.querySelector("button");
let input = document.querySelector("input");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");

btn.addEventListener("click", function () {
  let inputVal = input.value;
  p1.textContent = `${inputVal} meters = ${
    3.281 * inputVal
  } feet | ${inputVal} feet = ${(inputVal / 3.281).toFixed(3)} meter`;
  p2.textContent = `${inputVal} liter = ${
    0.264 * inputVal
  } gallon | ${inputVal} gallon = ${(inputVal / 0.264).toFixed(3)} liter`;
  p3.textContent = `${inputVal} kilo = ${
    2.204 * inputVal
  } pound | ${inputVal} pound = ${(inputVal / 2.204).toFixed(3)} kilo`;
});
