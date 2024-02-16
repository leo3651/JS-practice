"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST PAGE

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnLearnMore = document.querySelector(".btn--scroll-to");

const sectionOne = document.getElementById("section--1");

const cont = document.querySelector(".operations__tab-container");
const btns = document.querySelectorAll(".operations__tab");
const contents = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");
const headerEl = document.querySelector(".header");
const section = document.querySelectorAll(".section");

const imgTargets = document.querySelectorAll("img[data-src]");

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dots");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

// modal window
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

// nav__link scroll
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/* document.querySelectorAll(".nav__link").forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this);
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
); */

// tabbed component
console.log(cont);
console.log(btns);
console.log(contents);

cont.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  // remove classes
  console.log(clicked);
  btns.forEach((btn, i) => {
    btn.classList.remove("operations__tab--active");
    contents[i].classList.remove("operations__content--active");
  });

  // add clases
  clicked.classList.add("operations__tab--active");
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");

  /*   if (clicked) {
    console.log(clicked);
    clicked.classList.add("operations__tab--active");
  } */
});

// menu fade
const hoverHandler = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    console.log(siblings);
    const logo = link.closest(".nav").querySelector("img");
    console.log(logo);
    siblings.forEach((sibling) => {
      if (sibling !== link) sibling.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", hoverHandler.bind(0.5));

nav.addEventListener("mouseout", hoverHandler.bind(1));

/* nav.addEventListener("mouseover", function (e) {
  hoverHandler(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  hoverHandler(e, 1);
}); */

// sticky nav
const obscallback = function (entries, observer) {
  entries.forEach((entry) => console.log(entry));
};
const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obscallback, obsOptions);
observer.observe(sectionOne);

const stickyNav = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) nav.classList.remove("sticky");
  else nav.classList.add("sticky");
};

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(headerEl);

/* const s1Cords = sectionOne.getBoundingClientRect();
window.addEventListener("scroll", function () {
  console.log("Y: ", window.scrollY);
  console.log(s1Cords.y);
  if (scrollY > s1Cords.y) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
}); */

// reveal sections
const sectionReveal = function (entries, observer) {
  const [entry] = entries;

  console.log(`${entry.target}: `, entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.15,
});

section.forEach((sec) => {
  sectionObserver.observe(sec);
  // sec.classList.add("section--hidden");
});

// lazy loading images
const imgLoad = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};
console.log(imgTargets);

const imgObserver = new IntersectionObserver(imgLoad, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// slider
console.log(slider);
let currentSlide = 0;
const slideMax = slides.length - 1;
// slider.style.transform = "scale(0.5) translateX(-1000px)";
// slider.style.overflow = "visible";

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();
const dots = document.querySelectorAll(".dots__dot");

const activeDot = function () {
  dots.forEach((dot, i) => {
    console.log(dot);
    dot.classList.remove("dots__dot--active");
    console.log(currentSlide, dot.dataset.slide);
    if (Number(dot.dataset.slide) === currentSlide) {
      dot.classList.add("dots__dot--active");
      console.log("in");
    }
  });
};

const goToSlide = function (currentSlide) {
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
  );
  activeDot();
};

goToSlide(0);

const nextSlide = function () {
  if (currentSlide === slideMax) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slideMax;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

dotContainer.addEventListener("click", function (e) {
  const dot = e.target.closest(".dots__dot");
  if (!dot) return;
  console.log(dot);
  currentSlide = Number(dot.dataset.slide);
  goToSlide(currentSlide);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* 
// selecting elements
console.log("--- ELEMENTS ---");
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
console.log("--- creating and inserting el ---");
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
console.log("--- styles ---");
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
console.log("--- attributes ---");
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
console.log("--- classes");
logo.classList.add("class", "class2");
logo.classList.contains("class");
logo.classList.remove("class");
logo.classList.toggle("class");
console.log(logo.className);
logo.className = "nav__logo class";
console.log(logo.className);
logo.classList.remove("class");

// scrolling
console.log("--- SCROLLING ---");
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
console.log("--- EVENTS ---");
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
console.log("--- event propagation ---");
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

// DOM traversing
console.log("--- DOM TRAVERSING ---");
const headingOne = document.querySelector("h1");
console.log(headingOne);

// going downwards: child
console.log("--- downwards ---");
console.log(headingOne.querySelectorAll(".highlight"));
console.log(headingOne.childNodes);
console.log(headingOne.children);

headingOne.firstElementChild.style.color = "white";
headingOne.lastElementChild.style.color = "orangered";
console.log(headingOne.firstElementChild);

// going upwards: parents
console.log("--- upwards ---");
console.log(headingOne.parentNode);
console.log(headingOne.parentElement);

headingOne.closest(".header").style.background = "var(--gradient-primary)";

headingOne.closest("h1").style.background = "var(--gradient-secondary)";

// going sideways: siblings
console.log("--- siblings ---");
console.log(headingOne.previousElementSibling);
console.log(headingOne.nextElementSibling);

console.log(headingOne.previousSibling);
console.log(headingOne.nextSibling);

console.log(headingOne.parentElement.children);

[...headingOne.parentElement.children].forEach((el) => {
  if (el !== headingOne) el.style.transform = "scale(0.9)";
});
 */
