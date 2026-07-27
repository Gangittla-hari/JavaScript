let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++) {           //output -> Sirf image ka current src dekhkar print karta hai.
//     console.log(smallImages[i].src);
// }

for(let i=0; i<smallImages.length; i++) {              //output -> Har image ka src change kar deta hai.
    smallImages[i].src = "spiderman_img.png";          //Console mein message bhi print karta hai.
    console.log(`value of image no. ${i} is changed.`);
}