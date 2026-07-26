// Given an array of strings, return a new array where all strings are in uppercase.

let users = ['shohel','Sompa','Rongo','shakil','sadat']

let newUsers = users.map(function(element){
    return element.toUpperCase()
})

console.log(newUsers);
