// Write a function that checks if all elements in an array are numbers.


function arrayNumberCheck(arr){
    // let isNumber = true
    // arr.forEach(element => {
    //     if(typeof element !=='number'){
    //         isNumber = false
    //     }
        
    // });
    // return  isNumber

    let isNumber =  arr.every(element=>typeof element === 'number' )

    return isNumber
}

arr = [1,3,4,5]

isNumbers = arrayNumberCheck(arr)
console.log(isNumbers);
