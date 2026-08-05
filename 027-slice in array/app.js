//slice : copies a portion of an array
let color = ["red", "yellow", "blue", "orange", "pink", "white"];

color
(6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']

color.slice();
(6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']

color.slice(4);
(2) ['pink', 'white']

color.slice(2);
(4) ['blue', 'orange', 'pink', 'white']

color.slice(2,3);
['blue']

color.slice(-4);
(4) ['blue', 'orange', 'pink', 'white']

//negetive value last se count hoga
color.slice(-2);
(2) ['pink', 'white']