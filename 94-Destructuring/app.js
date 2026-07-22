let names = ["tony","bruce","peter","steve","hi","lio"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner,runnerup,...others] = names;    

//output
// winner
// 'tony'
// runnerup
// 'bruce'
// others
// (4) ['peter', 'steve', 'hi', 'lio']