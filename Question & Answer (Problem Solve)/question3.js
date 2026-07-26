// Generate a random integer between 0 to 18.

function generateRandomNumber(a,b){
    return Math.floor(Math.random(a)*b)
}

let randomNum = generateRandomNumber(0,18)
console.log(randomNum);
