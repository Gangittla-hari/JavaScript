function oddOrEvenFactory(request) {
    if (request == "odd") {
        let odd = function(n) {
            console.log(!(n % 2 == 0));
        }

        return odd;
    } else if(request == "even") {
        let even = function(n) {
             console.log(n % 2 == 0);
      }
      return even;
    } else {
        console.log("wrong request");
    }
}

let request = "odd"; //even




//output odd numbers call

// request
// 'odd' 

// let func = oddOrEvenFactory(request);
// undefined

// func
// ƒ (n) {
//             console.log(!(n % 2 == 0));
//         }

// func(3);
//  true

// func(22);
//  false




//even numbers  call

// request = "even";
// 'even'

// request
// 'even'

// let func = oddOrEvenFactory(request);
// undefined

// func
// ƒ (n) {
//              console.log(n % 2 == 0);
//       }

// func(3);
// false

// func(22);
// true
