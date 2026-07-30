//Add the following elements to the  container using only javascript and the DOM methods.
//1. a <p> with red text says "hey i'm red!"
//2. an <h3> with blue text that says "i'm a blue h3!"
//3. a <div> with a  black border and pink

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");


//ans2.
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");


//ans3.
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);