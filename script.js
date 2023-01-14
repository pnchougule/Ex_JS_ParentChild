"use strict";
document.body.firstElementChild.childNodes[1].childNodes[1].style.color = "red";
let first_ele = document.body.firstElementChild.firstElementChild;
console.log(first_ele);

document.body.childNodes[5].firstElementChild.querySelector(
  ".card-title"
).style.color = "green";
document.body.childNodes[5].childNodes[5].querySelector(
  ".card-title"
).style.color = "green";
document.body.firstElementChild.childNodes[1].querySelector(
  ".collapse"
).style.background = "cyan";
