let cars = ["bmw", "audi","tesla","maruti"];

//output
cars
(4) ['bmw', 'audi', 'tesla', 'maruti']

//push:add to end
cars.push("toyota");
5
cars
(5) ['bmw', 'audi', 'tesla', 'maruti', 'toyota']

//pop:delete from end & returns it
cars.pop();
'toyota'
cars
(4) ['bmw', 'audi', 'tesla', 'maruti']

//unshift:add to start
cars.unshift("toyota");
5

cars
(5) ['toyota', 'bmw', 'audi', 'tesla', 'maruti']
cars.unshift("farrari");
6

cars
(6) ['farrari', 'toyota', 'bmw', 'audi', 'tesla', 'maruti']

//:delete from start  &  returns it
cars.shift();
'farrari'

cars
(5) ['toyota', 'bmw', 'audi', 'tesla', 'maruti']