"use strict";

/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number";
console.log(document.querySelector(".message").textContent);

console.log(document.querySelector(".number"));

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 2;

document.querySelector(".guess").value = 19;
console.log(document.querySelector(".guess").value); */

let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    console.log("No number!");
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector("highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost";
      document.querySelector(".score").textContent = 0;
    }
  }

  // console.log(document.querySelector(".guess").value);
  // document.querySelector(".message").textContent = "Correct number";
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
