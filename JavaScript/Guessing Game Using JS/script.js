const max = prompt("Enter max number");
const random = Math.floor(Math.random * 6 + 1);
let guess = prompt("Guess a number between 1 and " + max);

while (true) {
  if (guess == "exit") {
    alert("You are out of the game");
    break;
  }
  if (guess == random) {
    alert("You guessed it right yayyyy");
    break;
  } else {
    guess = prompt("Guess again or enter 'exit' to quit");
  }
}
