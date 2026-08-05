//Expands an iterable into multiple values

function func (...arr) {
    //do somthing
}

let arr = [1,2,3,4,5];
undefined
Math.min(...arr);
1
console.log(...arr);
1 2 3 4 5



Math.min(1,2,3);
1
Math.min(1,2,3,1,2,3,0);
0
let arr = [1,2,3,4,1,2,3,1,2,3,0];
undefined
arr
(11) [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 0]
Math.min(...arr);
0
arr.push(-1);
12
Math.min(...arr);
-1
Math.max(...arr);
4