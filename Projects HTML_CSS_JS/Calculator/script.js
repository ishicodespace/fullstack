screenEl = document.getElementById("screen-el").getElementsByTagName("h1")[0];
buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", function () {
    if (button.innerText === "=") {
      try {
        screenEl.innerText = eval(screenEl.innerText);
      } catch (error) {
        screenEl.innerText = "Error";
      }
    } else if (button.innerText === "CLS") {
      screenEl.innerText = "";
    }
    else if (button.innerText === "n!")
    {
        let num = parseInt(screenEl.innerText);
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        screenEl.innerText = fact;
    }
        else {
      screenEl.innerText += button.innerText;
    }
  });
}
