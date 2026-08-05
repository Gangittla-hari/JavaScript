//Q1. what will be the output ?.
let greet = "hello";  //Global scope

function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }
    innerGreet();
}

// call function 
console.log(greet); 
changeGreet();


//output 
hello
namaste
namaste