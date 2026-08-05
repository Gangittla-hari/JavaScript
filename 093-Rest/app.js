function sum (...args) { //arguments
     for (let i=0; i<args.length; i++) {
        console.log("you gave us: ", args[i])
     }
}

// output
// sum(1);
//  you gave us:  1

// sum(2);
//  you gave us:  2

// sum(1);
//  you gave us:  1

// sum(3,5);
//  you gave us:  3
//  you gave us:  5



// function min() {
//     console.log(arguments);
// }


function sum(...args) {
    return args.reduce((sum, el)=> sum + el);
}

//output
// sum(1,2,3,4,5)
// 15
// sum(1,2,3,)
// 6
// sum(143,22,2333,-34);
// 2464

function min(msg, ...args) {
    console.log(msg);                   //msg output -> min("hello",1,2,3,4);
      return args.reduce((min,el) => {                  //hello
        if(min > el) {                                  //1
            return el;
        } else {
            return min;
        }
    });
}

//output
// min(1,2,3,4);
// 1
// min(200,23,1,-4)
// -4