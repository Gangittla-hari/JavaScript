const student = {
    name: "hari",
    age: 23,
    class: 10,
    subject: ["english","hindi","math",],
    username: "hari@123",
    password: "abcs",
};

//let {username, password} = student;
let {username: user, password: secret, city ="Mumbai"} = student;
// let password = student.password;



//output
// username
// 'hari@123'
// password
// 'abcs'
// city
// 'Mumbai'
