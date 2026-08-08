let form = document.querySelector('form');

form.addEventListener('submit', function(event){
   event.preventDefault();
   alert("Form Submitted");
});

//Normally form submit hone par browser page ko reload karta hai ya form ko submit karta hai.
//preventDefault() lagane ke baad browser ka default action nahi hoga.