function multipleGreet(func, count) {  //higher order function
    for(let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

// greet(); //call function
// greet();
// greet();

// multipleGreet(greet,5); //call function
multipleGreet(function() {console.log("namste")}, 5); //call function




//output 
//greet();
hello
hello
hello

//multipleGreet(greet,5); 
5hello

//multipleGreet(function() {console.log("namste")}, 5);
5namste
