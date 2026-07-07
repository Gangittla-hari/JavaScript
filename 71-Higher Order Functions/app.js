function multipleGreet(func, count) {  //higher order function
    for(let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}


greet(); // call function 
//output
hello 
hello
hello

multipleGreet(greet,5); //call  function
5 hello //output

multipleGreet(function() {console.log("namste")}, 5); //call  functon 
5 namste //output
