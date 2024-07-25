// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

// constants.js
export const PI = 3.14;
export const E = 2.71;

export function square(x) {
    return x * x;
}

export function cube(x) {
    return x * x * x;
}
