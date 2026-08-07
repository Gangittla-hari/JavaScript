// let input = document.querySelector("input");

// input.addEventListener("keydown", function(event) {
//     console.log("key= ", event.key);
//     console.log("code=",event.code);
//     console.log("key was pressed"); 
// });


// ex2.
// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });



//ex3.
// let input =  document .querySelector("input");

// input.addEventListener("keydown", function() {
//  console.log("key was pressed"); 
// }); 

// input.addEventListener("keyup", function() {
//     console.log("key was released"); 
// }); 



//ex 4.
let input = document.querySelector("input");

input.addEventListener("keydown", function(event) {
    console.log("code = ", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if (event.code == "ArrowUp") {
        console.log("character moved forward");
    } else if (event.code == "ArrowDown") {
        console.log("character moved backward");
    } else if (event.code == "ArrowLeft") {
        console.log("character moved left");
    } else if (event.code == "ArrowRight") {
        console.log("character moved right");
    }
});