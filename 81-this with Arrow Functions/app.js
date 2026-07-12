const student = {
    name: "hari",
    mark: 98,
    prop:this, //global scope
    getName: function  () {
        console.log(this);
        return this.name;
    },
    getMark: () => {
        console.log(this); //parent's scope -> window
        return this.mark;
    },
    getinfo1: function() {
        setTimeout( () => {
        console.log(this);
    }, 2000);
    },
     getinfo2: function() {
        setTimeout(function () {
        console.log(this);
    }, 2000);
 }
};