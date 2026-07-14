// let num = [1,2,3,4];

// let double = num.map((el)=>{
//     return el*el;
// })


let students = [
    {
    name: "hari",
    marks: 99,
},
{
    name: "leo",
    marks: 34,
},
{
    name: "krio",
    marks: 90.4,
},
];

let gpa = students.map((el) => {
    return el.marks / 10;
});