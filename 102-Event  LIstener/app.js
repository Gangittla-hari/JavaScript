let btns = document.querySelectorAll('button');

for (btn of btns) {
//    btn.onclick = sayHello;                  
//    btn.onclick = sayName;

// btn.addEventListener('click', sayHello);    // click event listener
// btn.addEventListener('click', sayName);
btn.addEventListener('dblclick', function() {  //doucle click event listener 
console.log("you double clicked me");
});
}


function sayHello() {
   alert('Hello');
}

function sayName() {
    alert("apna college");
}