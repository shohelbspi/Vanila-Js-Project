// let arr = [1,3,4,6]

// function square(arr){
//     let outputArr = []
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push(arr[i] * arr[i])
        
//     }
//     return outputArr
// }

// let result = square(arr)

// function cube(arr){
//     let outputArr = []
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push(arr[i] * arr[i] *arr[i])
        
//     }
//     return outputArr
// }

// let result = cube(arr)

// function diameter(arr){
//     let outputArr = []
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push(2* arr[i])
        
//     }
//     return outputArr
// }

// let result = diameter(arr)

// console.log(result);





// let squareLogic = function(r){
//     return r*r

// }

// let cubeLogic = function(r){
//     return r*r*r
// }


// function calculate(arr,logicFn){
//     let outputArr = []
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push(logicFn(arr[i]))
        
//     }
//     return outputArr
// }

// let result = calculate(arr,squareLogic)
// let result = calculate(arr,cubeLogic)

// console.log(result);

// MYMAP

// let Calculate = function(logicFn){
//     let outputArr = []
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push(logicFn(arr[i]))
        
//     }
//     return outputArr
// }
// Array.prototype.ownMap = Calculate

// let result = arr.ownMap(cubeLogic)

// console.log(result);

let arr = [5,6,9]

// let result = arr.every((elem)=>{
//     return typeof elem === 'number'
// })

let result = arr.find(function (elem) {
    return elem === 99
})



console.log(result);

