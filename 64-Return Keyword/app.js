//return keyword is used to return a value from a function and also to terminate the function execution. Any code after the return statement will not be executed.

function sum(a, b) {
    console.log("hello");
    console.log("hello");
    return a+b;
    console.log("hello");
    console.log("hello");
}

console.log(sum (sum(2, 2),5));


function isadult(age) {
    if(age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }   
    console.log("hello");
}

//