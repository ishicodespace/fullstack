let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
  let task = document.createElement("li");
  task.innerText = input.value;
  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete Task";
  delbtn.classList.add("delete");
  console.log(delbtn.classList);
  ul.append(task);
  task.appendChild(delbtn);
});
