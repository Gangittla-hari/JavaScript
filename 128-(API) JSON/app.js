let jsonRes = '{"fact":"While many parts of Europe and North America consider the black cat a sign of bad luck, in Britain and Australia, black cats are considered lucky.","length":146}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name: "hari",
    marks: 90,
    grade: "A"
};