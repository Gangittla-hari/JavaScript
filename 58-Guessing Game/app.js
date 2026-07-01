const max = prompt("enter the max number");

const random  = Math.floor(Math.random() * max) +1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit")  {
        console.log("user  quit");
        break;
}

if (guess == random) {
    console.log("you win");
    break;
 } else if (guess < random) {
    guess = prompt("Hint : your guess was too small. please try again");
 } else {
    guess = prompt("Hint : your guess was too high. please try again");
 }
}