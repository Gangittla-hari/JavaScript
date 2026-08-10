//Ans 1.
//Mouseout 
let box = document.querySelector("#box");

box.addEventListener("mouseout", function() {
    console.log("mouse moved out!");
});


//keypress
let keypress = document.querySelector("keypress");

document.addEventListener("keypress", function (event) {
    console.log("Key pressed:", event.key);
});


//Scroll
window.addEventListener("scroll", function() {
    console.log("Page is scrolling")
})


//load
window.addEventListener("load", function() {
    console.log("Page loaded successfully!");
});


//Ans 2.
let btn = document.createElement("button");

btn.innerText = "click me";
document.querySelector("body").append(btn);

btn.addEventListener("click", function() {
    btn.style.backgroundColor = "green";
});


//Ans 3.
let input =  document.querySelector("#name");
let h2 = document.querySelector("h2");

input.addEventListener("input", function () {
    let value = input.value;

    let onlyLetters = value.replace(/[^a-zA-Z]/g, "");

    input.value = onlyLetters;
    h2.innerText = onlyLetters;
});