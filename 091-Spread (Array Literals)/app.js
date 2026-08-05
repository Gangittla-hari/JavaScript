let arr = [1,2,3,4,5];
let newArr = [...arr]; //(5) [1, 2, 3, 4, 5]


let chars = [..."hello"];//(5) ['h', 'e', 'l', 'l', 'o']

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let nums = [...odd, ...even]; 
//nums
// (10) [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

// let nums = [...even, ...odd];