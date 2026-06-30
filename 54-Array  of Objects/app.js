const classinfo = [
    {
        name: "hari",
        grade: "A+",
        city: "US"
    },
   {
        name: "roju",
        grade: "B",
        city: "BBSR"
   },
    {
        name: "prasad",
        grade: "B",
        city: "UK"
    }
];

// classinfo
// (3) [{…}, {…}, {…}]
// 0: {name: 'hari', grade: 'A+', city: 'US'}
// 1: {name: 'roju', grade: 'B', city: 'BBSR'}
// 2: {name: 'prasad', grade: 'B', city: 'UK'}
// length: 3
// [[Prototype]]: Array(0)

// classinfo[0]
// {name: 'hari', grade: 'A+', city: 'US'}
// classinfo[1]
// {name: 'roju', grade: 'B', city: 'BBSR'}
// classinfo[2]
// {name: 'prasad', grade: 'B', city: 'UK'}
// classinfo[1].name
// 'roju'
// classinfo[1].city
// 'BBSR'
// classinfo[1].grade
// 'B'
// classinfo[1].city="AP"
// 'AP'
// classinfo[1].city
// 'AP'
// classinfo[1]
// {name: 'roju', grade: 'B', city: 'AP'}
// classinfo[1].gender = "male"
// 'male'
// classinfo[1]
// {name: 'roju', grade: 'B', city: 'AP', gender: 'male'}