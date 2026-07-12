// console.log("hello"); //hello
// console.log("hello"); //hello
// console.log(a); //error a is not defined
// console.log("hello"); 
// console.log("hello");

//Try & Catch
//The try satement allows you to define a block to be tested for errors while it is being executed.

//The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.


console.log("hello");
console.log("hello");
try {
console.log(a);
} catch(error) {
    console.log("Catch  an error.. a is not defined");
    console.log(error)
}

console.log("hello");
console.log("hello");

//output 
// hello
// hello
// Catch  an error.. a is not defined
// ReferenceError: a is not defined
//     at app.js:16:13
// hello
// hello

