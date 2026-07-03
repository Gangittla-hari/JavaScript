//Q1. Create a function that prints a poem.

function printpoem() {
    console.log("twinkle twinkle little star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}

printpoem();

//Create a Function to roll a dice & always display  the value of the dice (1 to 6) ?.
//Ex 1.
let rand =  Math.floor(Math.random() * 6 ) +1;
    console.log(rand);


//Ex 2 of function to roll a dice & always display  the value of the dice (1 to 6).
function rollDice() {
    let rand =  Math.floor(Math.random() * 6 ) +1;
    console.log(rand);
}

rollDice();