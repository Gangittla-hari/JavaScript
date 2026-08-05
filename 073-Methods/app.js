//Methods
const calculator = {
    num: 55,
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    }
};

//output
// calculator
// {num: 55, add: ƒ, sub: ƒ, mul: ƒ}
// calculator.num
// 55
// calculator.add(2,2);
// 4
// calculator.add(2,7);
// 9
// calculator.sub(2,7);
// -5
// calculator.sub(2,4);
// -2
// calculator.mul(2,2);
// 4
// calculator.mul(2,10);
// 20


//Methods (Shorthand)
const calculator = {
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    },
    mul(a,b) {
        return a*b;
    }
};

//output
// calculator
// {add: ƒ, sub: ƒ, mul: ƒ}
// calculator.add(2,2);
// 4
// calculator.add(3,9);
// 12
// calculator.sub(4,2);
// 2
// calculator.sub(4,5);
// -1
// calculator.mul(4,3);
// 12
// calculator.mul(4,2);
// 8