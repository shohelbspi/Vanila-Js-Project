// Create a function that returns the last element of an array.

// function findLastArrayElement(arr){
//     return  arr[arr.length -1]
// }
function findLastArrayElement(arr){
    return arr.at(-1)
}

let arr = [2,3,5,6,54]

let lastElem = findLastArrayElement(arr)
console.log(lastElem);


