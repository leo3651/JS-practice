"use strict";

// selecting elements
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const newGameBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const currentScorePlayer0 = document.getElementById("current--0");
const currentScorePlayer1 = document.getElementById("current--1");

// initial state
score0Element.textContent = 0;
score1Element.textContent = 0;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
diceElement.classList.add("hidden");
let playing = true;

// roll the dice
rollBtn.addEventListener("click", function () {
  if (playing) {
    // generate number display the dice
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceElement.classList.remove("hidden");
    diceElement.setAttribute("src", `dice-${randomNumber}.png`);
    // check if 1
    if (randomNumber === 1) {
      switchPlayer();
    }
    // check if 2-6
    else {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

// store score
holdBtn.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if finished
    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      playing = false;
      diceElement.classList.add("hidden");
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
    // switch player
    else {
      switchPlayer();
    }
  }
});

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
}
