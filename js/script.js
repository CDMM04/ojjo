"use strict"

let pop_up = document.querySelector(".popup-cont");
let btn_close = document.querySelector('.popup-cont__button');
let body = document.querySelector('body');

delayedPopUp();

function delayedPopUp() {
    window.setTimeout(showPopUp, 2000);
  }

function showPopUp() {
    pop_up.classList.add("visible");
    body.classList.add("popup-opened");

  }

document.onclick = ()=>{
    body.classList.remove("popup-opened");
    pop_up.classList.remove("visible");
}









