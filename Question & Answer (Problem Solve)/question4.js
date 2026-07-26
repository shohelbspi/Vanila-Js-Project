// Create a function that takes an array containing both numbers and strings, and returns a
// new array containing only the string values.

function filterStringElementInArr(arr){
    return arr.filter(function(element){
        // if (typeof element === 'string'){
        //     return true
        // }
        // else{
        //     false
        // }

        return typeof element ==='string'
    })

}

arr = [1,3,4,'aa','ss',7,'ronaldo']

resultArr = filterStringElementInArr(arr)
console.log(resultArr);
