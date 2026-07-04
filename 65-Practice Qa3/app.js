//Q1. Create a Function that returns the sum of numbers from 1 to n.
// function getSum (n) {
//     let sum = 0;

//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }

// //function call in the console
// //output
// getSum(4)
// 10
// getSum(3)
// 6
// getSum(2)
// 3
// getSum(5)
// 15

//Q2. Create a Function that returns the concatenation of all strings in an array.
let str = ["Gangittla", "hariprasad", "is", "a", "good", "boy"];

function concat(str) {
    let result="";
    
    for(let i=0; i<str.length; i++) {
        result += str[i];
    }
    return result;   
}