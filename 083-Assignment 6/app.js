//Ans 1
const arrayAverage = (arr) => {
    let total = 0;
    for (let  number  of  arr) {
        total += number;
    }
    return total / arr.length;
};
 let arr = [1,2,3,4,5,6];
 console.log(arrayAverage (arr));     //output is 3.5



//Ans 2
let num = 4;
 
const isEven = (num) => num % 2 == 0;


//Q3. What is the output of the following code :
const onject = {
    message: 'Hero, World!',

    longMessage() {
        console.log(this.message);
    }
};

//Ans 3
// setTimeout (Object.longMessage,  1000);

//After a delay of 1 second, undefined  is logged to the console.
//While the setTimeout() function uses the object.logMessage as a callback, still, it invokes  onject.logMessage as a regular function, rather than a method.

//And during a regular function invocation this equals the global object, which is a window in the case of the browser enviroment.

//That's why console.log(this.message) inside logMessage method logs window.message, which is undefined.


//Q4. What is the output of the following code:
let length = 4;

function callback () {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback ();
    },
};

object.method(callback, 1, 2);

//Ans 4.
// 'Hello, World!' is logged to the console.

// object.grtMessage() is a method invocation, that's why this inside the method equals object.

// There's also a variable declaration const message = 'Hello, Earth!' inside the method.
// The variable doesn't influence the value of the.message.