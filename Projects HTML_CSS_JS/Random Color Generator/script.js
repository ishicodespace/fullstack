let btn = document.querySelector("button");
let box = document.querySelector("div");

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}

btn.addEventListener("click", function () {
  let heading = document.querySelector("#color");
  let color = getRandomColor();
  box.textContent = color;
  box.style.textAlign = "center";
  box.style.backgroundColor = color;
});

getRandomColor();
