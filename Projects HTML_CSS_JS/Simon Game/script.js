//step 1
//keypress -> start the game
//button flash then level 1
//wait for any button to press
//user press a button (event listener)
//game sequence
//user sequence
//check user sequence with game sequence
//if correct -> level up
//if wrong -> game over, restart the game

//if any key is pressed on the document start the game

let btns = ["red", "yellow", "purple", "blue"];
let started = false;
let level = 0;
let gameSequence = [];
let userSequence = [];
let h3= document.querySelector("h3");

//start the game on keypress anywhere on the document
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

//button flash function
function buttonFlash(button) {
  button.classList.add("flash");
  setTimeout(function () {
    button.classList.remove("flash");
  }, 300);
}

//level up function
function levelUp() {
  userSequence = [];
  level++;
  let levelTitle = document.querySelector("h3");
  levelTitle.innerText = `Level ${level}`;

  //generate random button
  let randomIndex = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIndex];
  let randomButton = document.querySelector(`.${randomColor}`);
  //flash the button
  buttonFlash(randomButton);

  //push button class to game sequence
  gameSequence.push(randomButton.getAttribute("id"));
  console.log(gameSequence);
}

//on button press flash the button and add to user sequence
function buttonPress() {
  let btnPressed = this;
  buttonFlash(btnPressed);

  userColor = btnPressed.getAttribute("id");
  userSequence.push(userColor);
  console.log("user", userSequence);
  checkSequence(userSequence.length-1);
}

//add event listener to buttons
let allButtons = document.querySelectorAll(".btn");
for (let i = 0;i<allButtons.length;i++){
  allButtons[i].addEventListener("click", buttonPress);
}

//check user sequence with game sequence
//if correct -> level up
//if wrong -> game over, restart the game
function checkSequence(index) {
  if (userSequence[index] == gameSequence[index]) {
    // if user finished the whole sequence correctly
    if (userSequence.length == gameSequence.length) {
      console.log("right");
      setTimeout(levelUp, 800); // delay so next flash isn't too fast
    }
  } else {
    console.log("wrong");
      h3.innerText = `Game Over! Your Score was ${level} Press Any Key to Restart`;
    started = false;
    level = 0;
    gameSequence = [];
    userSequence = [];
    resetGame();
  }
}

function resetGame() {
  started = false;
  level = 0;
  gameSequence = [];
  userSequence = [];
}