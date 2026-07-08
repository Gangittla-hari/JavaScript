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


multipleGreet(greet, 2); //call  function
2 hello //output
multipleGreet(greet, 56);
56 hello
multipleGreet(greet, 100);
100 heloo


multipleGreet(function() {console.log("namste")}, 5); //call  functon 
5 namste //output
