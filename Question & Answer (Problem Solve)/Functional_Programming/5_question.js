// How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim →
// capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function
// composition, chaining, pipe or compose logic.)

// chainning

let str = "shohel"
let reverseStr = str.split('').reverse().join('')
// console.log(reverseStr);


let addTo = num => num + 2
let multiply5 = num => num * 5
let subtract10 = num => num - 10

// let result = addTo(3)
// let result = multiply5(3)
// let result = subtract10(30)

// let result = subtract10(multiply5(addTo(5)))

function compose(...fns) {
    return function (val) {
        return fns.reduceRight(function (acc, currentFn) {
            return currentFn(acc)
        }, val)
    }

}

function pipe(...fns) {
    return function (val) {
        return fns.reduce(function (acc, currentFn) {
            return currentFn(acc)
        }, val)
    }
}

let result = compose(subtract10, multiply5, addTo)(5)
let result2 = pipe(subtract10, multiply5, addTo)(30)

// console.log(result);
// console.log(result2);






function sanitize(str) {
    return str.replace(/[^\w\s]/g, "");
}

function trim(str) {
    return str.trim();
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Step 2: Compose function

function compose(...fns) {
    return function (value) {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

// Step 3: Create a composed function

const prepareInput = compose(
    capitalize,
    trim,
    sanitize
);

// Step 4: Test

const input = "   @shohel islam!!   ";

console.log(prepareInput(input));