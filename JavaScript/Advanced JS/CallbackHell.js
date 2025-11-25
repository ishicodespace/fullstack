//CALLBACK HELL

h1 = document.querySelector("h1");

// setTimeout(() => {
//   changeColor("red");
//   // h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   changeColor("blue");
//   //   h1.style.color = "blue";
// }, 2000);

// setTimeout(() => {
//   changeColor("yellow");
//   //   h1.style.color = "yellow";
// }, 3000);

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
}

// changeColor("red", 1000);
// changeColor("blue", 2000);
// changeColor("yellow", 3000);

//nesting of callbacks
changeColor("red", 1000, function () {
  changeColor("blue", 1000, function () {
    changeColor("yellow", 1000, function () {});
  });
});
