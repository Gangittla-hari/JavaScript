let todo = [];
let req = prompt("please enter your request");

while(true) {
    if (req == "quit") {
       console.log("quitting app");
       break;
    }
   
    if(req == "list") {
        console.log("____________");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("____________");

    } else if(req == "add") {
       let task = prompt("please enter the task you want to add");
       todo.push(task);
       console.log("task added");

    } else of (req == "delete"); {
      let idx = prompt("please enter the task you want to add");
      todo.splice(idx, 1);
      console.log("task deleted");
    }
    req = prompt("please enter your request");
}
