"use strict";

var buttons = document.querySelectorAll(".card-buttons button");
var sections = document.querySelectorAll(".card-section");
var card = document.querySelector(".card");

var handleButtonClick = function handleButtonClick(e) {
  var targetSection = e.target.getAttribute("data-section");
  var section = document.querySelector(targetSection);
  targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(function (s) {
    return s.classList.remove("is-active");
  });
  buttons.forEach(function (b) {
    return b.classList.remove("is-active");
  });
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(function (btn) {
  btn.addEventListener("click", handleButtonClick);
});