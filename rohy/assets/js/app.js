//JQuery Module Pattern
"use strict";

// An object literal
const app = {
  init() {
    app.functionOne();
  },
  functionOne() {
  }
};



/********************* Menu Js **********************/

function windowScroll() {
  const headersticky = document.getElementById("header-sticky");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    headersticky.classList.add("nav-sticky");
  } else {
    headersticky.classList.remove("nav-sticky");
  }
}

window.addEventListener('scroll', (ev) => {
  ev.preventDefault();
  windowScroll();
})