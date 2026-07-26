// Check if an object is empty (has no keys).

let obj = {
}

let isEmptyarr = Object.keys(obj).length === 0

if (isEmptyarr) {
    console.log('object are empty');
    
}
else{
    console.log('object are not empty');
    
}