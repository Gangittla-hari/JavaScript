let primary =  ["red", "yellow", "blue"];

// indexOf : return index of something
primary
(3) ['red', 'yellow', 'blue']

primary.indexOf("red");
0

primary.indexOf("yellow");
1

primary.indexOf("green");
-1

primary.indexOf("Yellow");
-1

//includes: search for a value
primary.includes("green");
false
primary.includes("red");
true