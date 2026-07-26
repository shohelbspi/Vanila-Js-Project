// Write a function that returns the length of a given object (number of keys).

function coutObjKeys(obj){
    return Object.keys(obj).length
}

obj = {
    name:"shohel hossain",
    age:28

}

keys = coutObjKeys(obj)
console.log(keys);
