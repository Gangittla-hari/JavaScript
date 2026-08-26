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
    }, 
    ()=>{
    console.log("failure : week connection. data not saved");
});

