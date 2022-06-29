let firstCard = 10;
let secondCard = 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlakcJack!";
    hasBlackJack = true;
  } else {
    message = "You've out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 4;
  sum += card;
  renderGame();
}
