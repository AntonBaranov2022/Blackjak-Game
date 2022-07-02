let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
  let randomNumder = Math.floor(Math.random() * 13) + 1;
  if (randomNumder === 1) {
    return 11;
  } else if (randomNumder > 10) {
    return 10;
  } else {
    return randomNumder;
  }
}

function startGame() {
  isAlive = true;
  cards.push(getRandomCard());
  cards.push(getRandomCard());
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ", ";
  }
  sumEl.textContent = "Sum: " + sum;
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
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

for (let index = 1; index < car.length; index++) {}
console.log(floorNumber);
