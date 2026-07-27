// How do you use .reduce() to calculate the total price in a shopping cart?

let arr = [2,5,6,9]

let result = arr.reduce(function(acc,current){
    console.log(acc);
    
    return acc+current;
    
},0)

console.log(result);
