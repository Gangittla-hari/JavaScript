let num = [1,2,3,4];

let double = num.map((el)=>{
    return el * el; //print any number Square 
    return el * 2; //double value store
});


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


let nums = []