//Q1
let arr = [7, 9, 0, -2];

let n = 3;

let ans = arr.slice(0, n);

console.log(ans);
(3) [7, 9, 0]

//Q2
let arr = [7, 9, 0, -2];

let n = 3;

let ans  =  arr.slice(arr.length-n);

console.log(ans);
(3) [9, 0, -2]


//Q3
let str = prompt("please enter a string");

if(str.length == 0) {
    console.log("string is empty");
} else {
    console,log("string is not empty");
}

//Q4
let str = "ApnaCollage";
let idx = 3;

if (str[idx] == str[idx]. toLowerCase()) {
    console.log("character is lowecase");
} else {
    console.log("character is not lowerCase");
} 
//output: character is lowecase

//Q5
let str = prompt ("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);

//Q6
let arr = ["hello", 'a', 23, 64, 99, -6];
let item = 64;

if (arr.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("element  doesn't exist in array");
}
//output: element exists in array