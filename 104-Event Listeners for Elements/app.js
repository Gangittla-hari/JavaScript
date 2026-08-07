let p = document.querySelector("p");

p.addEventListener("click", function() {
    console.log("You clicked the paragraph!");
});

let box = document.querySelector(".box");
box.addEventListener("mouseover", function() {
    console.log("mouse inside box");
});