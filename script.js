"use strict";

const main = document.querySelector(".bod");

function addingText(string, index) {
  const html = `<h1>Hello ${string}</h1>`;
  main.insertAdjacentHTML("beforeend", html);
}

document
  .querySelector(".buttons")
  .addEventListener("click", () => addingText("World"));
