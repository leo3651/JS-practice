"use strict";

// selecting elements
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const rollDiceElement = document.querySelector(".btn--roll");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const currentScorePlayer0 = document.getElementById("current--0");
const currentScorePlayer1 = document.getElementById("current--1");

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

rollDiceElement.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceElement.classList.remove("hidden");
  diceElement.setAttribute("src", `dice-${randomNumber}.png`);
  if (randomNumber === 1) {
    if (player0Element.classList.contains("player--active")) {
      player0Element.classList.remove("player--active");
      player1Element.classList.add("player--active");
    } else {
      player1Element.classList.remove("player--active");
      player0Element.classList.add("player--active");
    }
  } else {
    if (player0Element.classList.contains("player--active")) {
      currentScorePlayer0.textContent =
        Number(currentScorePlayer0.textContent) + randomNumber;
    } else {
      currentScorePlayer1.textContent =
        Number(currentScorePlayer1.textContent) + randomNumber;
    }
  }
});
