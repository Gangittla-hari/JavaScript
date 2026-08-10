//Mouseout 1.
// const test = document.getElementById("test");

// test.addEventListener("mouseleave", (event) => {
//     event.target.style.color = "purple";

//     setTimeout(() => {
//         event.target.style.color = "";
//     }, 1000);
// });

// test.addEventListener("mouseout", (event) => {
//     event.target.style.color = "orange";

//     setTimeout(() => {
//         event.target.style.coloe = "";
//     }, 500);
// });

//Ans 1.
//Mouseout 2
// let box = document.querySelector("#box");

// box.addEventListener("mouseout", function() {
//     console.log("mouse moved out!");
// });


//keypress
// let keypress = document.querySelector("keypress");

// document.addEventListener("keypress", function (event) {
//     console.log("Key pressed:", event.key);
// });


//Scroll
// window.addEventListener("scroll", function() {
//     console.log("Page is scrolling")
// })


//load
// window.addEventListener("load", function() {
//     console.log("Page loaded successfully!");
// });

//Ans 2.
let btn = document.createElement("button");

btn.innerText = "click me";
document.querySelector("body").append(btn);

btn.addEventListener("click", function() {
    btn.style.backgroundColor = "green";
});