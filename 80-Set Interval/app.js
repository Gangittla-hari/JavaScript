console.log("Hi there");

// setInterval(() => {
//     console.log("Apna Collage");
// }, 2000);
// //output
// Hi there
// Apna Collage // non stope print kartha rahega

let id = setInterval(() => {
     console.log("Apna Collage");
 }, 2000);

 console.log(id);


 let id2 = setInterval(() => {
     console.log("Hello world");
 }, 3000);

 console.log(id2); 

// a function nonstope print hota rahega jab tak haam Clearinterval(id) na de taab tak
// Apna Collage
// Hello world
// clearInterval(id)
// undefined
// Hello world
// clearInterval(id2)
// undefined