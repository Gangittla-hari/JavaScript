//Q1. Check if all numbers in our array are multiples of 10 or not.
let nums = [10,20,30,40];

let ans = nums.every((el) => el % 10 == 0);

console.log(ans); //output is true


//Q2. Create a function to find  the min number in an array.

let nums = [10,20,30,40,2];

let min = nums.reduce((min, el) => {
   if (min < el) {
    return min;
   } else {
    return el;
   }
});

console.log(min);  //output is 2