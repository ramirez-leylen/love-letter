let button = document.querySelector(".button")
let flap = document.querySelector(".letter-flap");
let content = document.querySelector(".letter-content"); 
let heart1 = document.querySelector(".heart1");
let heart2 = document.querySelector(".heart2");
let heart3 = document.querySelector(".heart3");
let heart4 = document.querySelector(".heart4");

function buttonIsClicked() {
    flap.classList.add("flap-animation");
    content.classList.add("content-animation");
    heart1.classList.add("heart1-anim");
    heart2.classList.add("heart2-anim");
    heart3.classList.add("heart3-anim");
    heart4.classList.add("heart4-anim");
}