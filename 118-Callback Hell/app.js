h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorchange) {
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
    h1.style.color = color;
}

changeColor("red", 1000);
changeColor("orange", 2000);
changeColor("green", 3000);
