let num = [1,2,3,4];

let double = num.map((el)=>{
    return el * el; //print any number Square 
    return el * 2; //double value store
});

//ex2
let student = [
    {
        name: "hari",
        marks: 99,
    },
    {
        name: "krishna",
        marks: 34,
    },
    {
        name: "radha",
        marks: 78,
    },
];

let gpa = student.map((el) => {
    return  el.marks / 10;
});



//Fliter 
let nums = [1,2,3,4,5,6,7,8,9,10,11];
let ans = nums.filter((el) => { //even -> true, odd -> false
    return el % 2 == 0; // even num output (5) [2, 4, 6, 8, 10]
    return el % 2 != 0; // odd num output (6) [1, 3, 5, 7, 9, 11]
    return el < 5; //output is (4) [1, 2, 3, 4]
});