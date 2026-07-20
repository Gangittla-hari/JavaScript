const  data = {
    email: "hariprasad@gmail.com",
    password: "abcd",
};

const datacopy = {...data, id: 123, country: "india"};

let arr = [1,2,3,4,5]; //val
let obj1 = { ...arr}; //obj -> key:val

let obj2 = {..."hello"}; //string