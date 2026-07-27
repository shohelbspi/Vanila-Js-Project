// Explain immutability and how you would update an object in an array without mutating the original.

let users = {
    name:"shohe",
    age : 26,
    gender : 'male'

}

function UpdateObjName(users,name){
    let newObj = {...users,name}
    return newObj
}

console.log(users);

let result = UpdateObjName(users,"Sompa")

console.log(result);
