//Q1. Create a Function that gives us the average of 3 numbers ?.
function calcAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
//Call the function 
calcAvg(2, 4, 6);

output: 4


//Q2. Create a function that prints the multiplication table of a number ?.
function printtable(n) {
    for (let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}
printtable(5);

