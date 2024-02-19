"use strict";

// selecting elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");

// close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0, n = openModalBtns.length; i < n; i++)
//   console.log(openModalBtns[i]);
//   console.log(openModalBtns[i].textContent);

for (let i = 0, n = openModalBtns.length; i < n; i++)
  openModalBtns[i].addEventListener("click", function () {
    console.log(`Button ${i + 1} clicked`);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// escape modal
document.addEventListener("keydown", function (event) {
  console.log(event);
  console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
