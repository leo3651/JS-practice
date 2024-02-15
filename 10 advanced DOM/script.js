"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST PAGE

// modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnLearnMore = document.querySelector(".btn--scroll-to");
const sectionOne = document.getElementById("section--1");

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

// learn more btn scroll
btnLearnMore.addEventListener("click", () => {
  sectionOne.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
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

// attributes
const logo = document.querySelector(".nav__logo");
console.log(logo);
console.log(logo.alt);
console.log(logo.src);

console.log(logo.designer); // non-standard property
console.log(logo.getAttribute("designer"));

console.log(logo.className);

logo.alt = "Beautiful minimalist logo";
console.log(logo.alt);

logo.setAttribute("company", "bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

const btnLink = document.querySelector(".nav__link--btn");
console.log(btnLink.href);
console.log(btnLink.getAttribute("href"));

// data attributes
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add("class", "class2");
logo.classList.contains("class");
logo.classList.remove("class");
logo.classList.toggle("class");
console.log(logo.className);
logo.className = "nav__logo class";
console.log(logo.className);
logo.classList.remove("class");

// scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");

btnScrollTo.addEventListener("click", function (event) {
  console.log(event.target);
  console.log(this);

  const s1coord = section1.getBoundingClientRect();
  console.log("Section 1: ", s1coord);
  console.log("Btn learn more: ", btnScrollTo.getBoundingClientRect());

  console.log("Current scroll X/Y: ", window.scrollX, window.scrollY);

  console.log(
    "Viewport width/height: ",
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  // window.scrollTo(s1coord.x, s1coord.y + window.scrollY);

  // window.scrollTo({
  //   left: s1coord.x,
  //   top: s1coord.y + window.scrollY,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// events
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("You are reading the heading!");

  h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert("You are reading the heading");
// };

// event propagation
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomInt(5, 7));
console.log(randomColor());

document.querySelector(".nav__link").addEventListener("click", function (e) {
  // console.log(e);
  // console.log(e.target);
  // console.log(this);
  this.style.backgroundColor = randomColor();
  console.log("LINK: ", e.target, e.currentTarget);
  console.log(this);
  console.log(e.currentTarget);

  e.stopPropagation(); // stop propagation
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER: ", e.target, e.currentTarget);
  console.log(this);
  console.log(this === e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV: ", e.target, e.currentTarget);
    console.log(this);
    console.log(this === e.currentTarget);
  },
  true // it listens an event on a way down -> first in console
);
