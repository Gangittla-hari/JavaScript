//splice : removes / replaces / add elements in place
//splice(start, deleteCount, item0...itemN)

let color = ["red", "yellow", "blue", "orange", "pink", "white"];

// color
// (6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']

// color.splice(4);
// (2) ['pink', 'white']

// color.splice(0,1);
// ['red']

// color
// (3) ['yellow', 'blue', 'orange']

// color.splice(0, 1, "black", "grey");
// ['yellow']

// color
// (4) ['black', 'grey', 'blue', 'orange']

// color.splice(1, 0, "offwhite");
// []

// color
// (5) ['black', 'offwhite', 'grey', 'blue', 'orange']

// color.splice(1, 1, "dark blue");
// ['offwhite']

// color
// (5) ['black', 'dark blue', 'grey', 'blue', 'orange']