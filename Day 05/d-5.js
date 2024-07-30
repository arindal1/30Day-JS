// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

checkEvenOrOdd(4); // Example usage
checkEvenOrOdd(7);


// Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(5)); // Example usage
console.log(calculateSquare(9));


// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (a, b) {
    const max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
};

findMax(10, 20); // Example usage
findMax(7, 3);


// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
    return str1 + str2;
};

console.log(concatenateStrings("Hello, ", "world!")); // Example usage
console.log(concatenateStrings("Good ", "morning!"));


// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (a, b) => a + b;

console.log(calculateSum(5, 7)); // Example usage
console.log(calculateSum(10, 20));


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("Hello, world!", "o")); // Example usage
console.log(containsCharacter("JavaScript", "x"));


// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2)); // Example usage
console.log(multiply(7));    // Using default value for b


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Alice", 25)); // Example usage
console.log(greet("Bob"));       // Using default value for age


// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3); // Example usage


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

const addThree = num => num + 3;
const multiplyByTwo = num => num * 2;

console.log(applyFunctions(addThree, multiplyByTwo, 5)); // Example usage


// Feature Request 1: Write a script that includes a function to check if a number is even or odd and logs the result.
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

isEvenOrOdd(10); // Example usage
isEvenOrOdd(15);


// Feature Request 2: Create a script that includes a function to calculate the square of a number and returns the result.
function square(number) {
    return number * number;
}

console.log(square(4)); // Example usage
console.log(square(7));


// Feature Request 3: Write a script that includes a function expression to concatenate two strings and returns the result.
const concatStrings = function (str1, str2) {
    return str1 + str2;
};

console.log(concatStrings("Good ", "night!")); // Example usage
console.log(concatStrings("Happy ", "coding!"));


// Feature Request 4: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
const sum = (a, b) => a + b;

console.log(sum(8, 12)); // Example usage
console.log(sum(3, 14));


// Feature Request 5: Write a script that includes a higher-order function to apply a given function multiple times.
function applyMultipleTimes(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

const printMessage = () => console.log("This is a message.");
applyMultipleTimes(printMessage, 4); // Example usage
