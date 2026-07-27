// Create a function that removes duplicate values from an array.

let arr = [1,1,2,3,4,4,5,6,7,7]

function removeDuplicate(arr){
    let set = new Set(arr)

    return [...set]
}

let result = removeDuplicate(arr)
console.log(result);


  