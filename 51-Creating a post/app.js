const post = {
    username: "@hariprasad",
    content: "This is my #firstPost",
    likes: 190,
    repost: 9,
    tag: ["@hariprasd", "@oggy"]
};
//output 
//{username: '@hariprasad', content: 'This is my #firstPost', likes: 190, repost: 9, tag: Array(2)}  

//JS automatically converts objects keys to strings.
//Even if we made the number as a key, the number will be converted to string.
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
