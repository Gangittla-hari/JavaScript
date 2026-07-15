let arr = [1,2,3,4,5,6,7,9,10];

let max =-1;
for(let i=0; i<arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i];
    }
}

console.log(max) // output is 10

//ex2 
let arr = [1,2,3,4,5,6,7,9,10,22];

let max = arr.reduce((max,el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
 });

 console.log(max); //output is 22

