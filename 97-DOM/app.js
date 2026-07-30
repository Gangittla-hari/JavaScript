// // // Selecting Element  by class Name

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++) {              //output -> Sirf image ka current src dekhkar print karta hai.
//     console.log(smallImages[i].src);
// }

// // EX 2.
// // for(let i=0; i<smallImages.length; i++) {              //output -> Har image ka src change kar deta hai.
// //     smallImages[i].src = "spiderman_img.png";          //Console mein message bhi print karta hai.
// //     console.log(`value of image no. ${i} is changed.`);
// // }



// // //Query Selectors
// console.dir(document.querySelector("h1")); //output h1 

// console.dir(document.querySelector("#description")); //p#description

// console.dir(document.querySelector(".oldImg"));  //img.oldImg  

// console.dir(document.querySelector("div a"));  //a.boxLink  - Selecting an <a> Tag Inside a <div> Element

// console.dir(document.querySelectorAll("div a"));  //Selecting an all <a> Tag Inside a <div> Element

// // //output 
// // // NodeList(4)
// // // 0: a.boxLink
// // // 1: a.boxLink
// // // 2: a.boxLink
// // // 3: a.boxLink
// // // length: 4
// // // [[Prototype]]: NodeList


// // //Manipuleting style
// let links = document.querySelectorAll(".box a");

// for (links  of links) {ASSs
//     links.style.color = "red"; //inline style
// }
// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "red";
// }