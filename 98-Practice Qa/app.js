//Add the following elements to the  container using only javascript and the DOM methods.
//1. a <p> with red text says "hey i'm red!"
//2. an <h3> with blue text that says "i'm a blue h3!"
//3. a <div> with a  black border and pink

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");