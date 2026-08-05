//Q1. Write an arrow function that returns the square  of a number 'n'.
//Ans
const square = (n) => (n*n);

console.log(square(4));
// outpt is '16'




//Q2. Write a function that prints "Hello World" 5 times at intervals of 2s each.
//Ans
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval ran");
},10000);
//output 
//6 Hello World
//Clear Interval ran