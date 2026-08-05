//Q1
let months = ["january", "july", "march",  "august"];

months
(4) ['january', 'july', 'march', 'august']

months.splice(0, 2, "july", "june");
(2) ['january', 'july']

months
(4) ['july', 'june', 'march', 'august']


//Q2
let lang = ["c", "c++", "html", "js", "python", "java", "c#", "sql"];
undefined

lang
(8) ['c', 'c++', 'html', 'js', 'python', 'java', 'c#', 'sql']

lang.reverse();
(8) ['sql', 'c#', 'java', 'python', 'js', 'html', 'c++', 'c']

lang.reverse();
(8) ['c', 'c++', 'html', 'js', 'python', 'java', 'c#', 'sql']

lang.reverse().indexOf("js");
4