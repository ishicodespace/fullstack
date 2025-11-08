let hasBlackaJack = false; //whether or not the user has blackjack
let isAlive = true; //check if player can still play
let message = "";
   let firstCard = getRandomCard();
   let secondCard = getRandomCard();
   let cards = [firstCard, secondCard];
   let sum = firstCard + secondCard;

//store the message-el paragraph in a variable
let messageEl = document.getElementById("message-el");

//store the sum-el paragraph in a variable
let sumEl = document.getElementById("sum-el");

//store the cards-el paragraph in a variable
let cardsEl = document.getElementById("cards-el");

function startGame() {
  if (isAlive == true && hasBlackaJack == false) {
 
    renderGame();
  }
}

function resetGame() {
 messageEl.textContent = "Play Again!";
 sumEl.textContent = "Sum: ";
 cardsEl.textContent = "Cards: ";
 isAlive = true;
 hasBlackaJack = false;
 firstCard = getRandomCard();
 secondCard = getRandomCard();
 cards = [firstCard, secondCard];
 sum = firstCard + secondCard;
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cards;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "YAY! You have won the Blackjack!";
    hasBlackaJack = true;
  } else {
    message = "Loser. You are out of the game! 💀\n Start Again";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive == true && hasBlackaJack == false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    sumEl.textContent = "Sum: " + sum;
    renderGame();
  }
}

function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1;
}
