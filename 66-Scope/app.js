let sum = 54;          //Global scope variable

function calsum(a, b) {
    let sum = a + b;   //Function scope variable
    console.log(sum);
} 

//Function call
calsum(10, 20);
console.log(sum);