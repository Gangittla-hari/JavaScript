function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    }else {
        failure();
    }
}

savetoDb(
"apna college", 
    ()=> {
    console.log("success : your data was saved");
    savetoDb(
        "hello world", 
        ()=> {
        console.log("success2: data2 saved");
        savetoDb(
            "hari",
            () => {
        console.log("success3: your data was saved");
            },
            () => {
                console.log("failure3: week conection");
            }
        );
    }, 
    () => {
        console.log("failure2: week conection");
    }
   );
 }, 
    ()=>{
    console.log("failure : week connection. data not saved");
});

