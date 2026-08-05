//onclick event

// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function() {
//     // console.log('Button  was clicked');
//     alert('Button was clicked'); 
// }


let  btns = document.querySelectorAll('button');

for (btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function() { //onmouseenter event
        console.log("you entered a button") //this event is triggered when the mouse pointer enters the button
    }
    console.log(btn);
}

function sayHello() {
    alert('Hello');
}

