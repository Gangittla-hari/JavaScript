h1 = document.querySelector("h1");

function changecolor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changecolor("red", 1000, () => {
    changecolor("orange", 1000, () => {
        changecolor("green", 1000);
    });
});

//Callback nesting -> Callback hell


// function changeColor(color, delay, nextColorchange) {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
//     h1.style.color = color;
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);


