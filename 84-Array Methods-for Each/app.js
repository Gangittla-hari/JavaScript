// //ex1
let arr = [1,2,3,4,5];

let print = function(el){
    console.log(el);
}

arr.forEach(print);

// //ex2
let arr = [1,2,3,4,5];
arr.forEach(function(el){
    console.log(el);
});

//ex3 arrow function
let arr = [1,2,3,4,5];

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function (el) {
    console.log(el);
});


//ex4 object
let arr = [{
   name: "hari",
   marks: 98
},
{
   name: "krishna",
   marks: 99
},
{
   name: "prasad",
   marks: 90
}];

arr.forEach((student)=> {
   console.log(student.marks);
});


