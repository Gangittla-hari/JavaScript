let arr =  ['a', 'b', 'c',]; 
undefined

let arrCopy = arr;
undefined

arr == arrCopy
true

arr === arrCopy
true

arr.push('d');
4

arr
(4) ['a', 'b', 'c', 'd']

arrCopy
(4) ['a', 'b', 'c', 'd']

arrCopy.pop();
'd'

arrCopy
(3) ['a', 'b', 'c']

arr
(3) ['a', 'b', 'c']