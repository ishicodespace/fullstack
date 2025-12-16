let tasks = [];
const inputEl = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const ulEL = document.querySelector("ul");

// load saved tasks when extension opens
const tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
if (tasksFromStorage) {
  tasks = tasksFromStorage;
  render();
}

addBtn.addEventListener("click", function () {
  if (inputEl.value.trim() === "") return;

  tasks.push(inputEl.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  inputEl.value = "";
  render();
});

// render function
function render() {
  ulEL.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${tasks[i]}</span>
      <button class="delete-btn" data-index="${i}">Delete</button>
    `;
    ulEL.appendChild(li);
  }
}

// one click listener for all delete buttons
ulEL.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.getAttribute("data-index");

    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
  }
});
