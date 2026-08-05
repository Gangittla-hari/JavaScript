const studnt = {
    name: "hari",
    age: 24,
    eng: 95,
    math: 99,
    phy: 72,
getAvg() {
    console.log(this);
    let avg = (this.eng+this.math+this.phy) /3;
    console.log(`${this.name} got avg marks = ${avg}`);
}
}

// function getAvg() {
//     console.log(this);
// }


//output
// studnt.getAvg();
// app.js:8 {name: 'hari', age: 24, eng: 95, math: 99, phy: 72, …}
// app.js:10 hari got avg marks = 88.66666666666667
