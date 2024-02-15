"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((modal) => modal.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// LECTURES

// selecting elements
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
console.log(header);
const allSections = document.querySelectorAll(".section"); // returns NodeList
console.log(allSections);
console.log(document.querySelector(".nav__link"));

document.getElementById("section--1");
const allBtns = document.getElementsByTagName("button"); // returns HTMLCollection
console.log(allBtns);
console.log(document.getElementsByClassName("btn")); // returns HTMLCollection

// creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics"
message.innerHTML = `We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>`;

header.prepend(message); // inserts element
header.append(message); // el already exists -> element can only be at one place
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

///
const message2 = document.createElement("div");
message2.innerHTML = `We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>`;
header.insertAdjacentElement("beforebegin", message2);
message2.remove();

// delete elements
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
  // message.parentElement.removeChild(message);
});

// styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.height); // it's not an inline style
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
console.log(message.style.height);

document.documentElement.style.setProperty("--color-primary", "orangered");

// atributes
const logo = document.querySelector(".nav__logo");
console.log(logo);
console.log(logo.alt);
console.log(logo.src);
