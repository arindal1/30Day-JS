// Task 1: Intentional Error Throwing

function throwError() {
    try {
        throw new Error("This is an intentional error!");
    }
    catch (error) {
    console.log("Error caught:", error.message);
    }
}
throwError(); // Output: Error caught: This is an intentional error!


// Task 2: Division by Zero Check

function divideNumbers(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return num1 / num2;
    } catch (error) {
        console.error("Division error:", error.message);
        return null; // Or handle the error differently (e.g., display an error message)
    }
}

const result = divideNumbers(10, 2);
console.log(result); // Output: 5

const zeroResult = divideNumbers(10, 0);
console.log(zeroResult); // Output: Division error: Cannot divide by zero! (or null)


// Task 3: Execution Flow Observation

try {
    console.log("Inside try block");
    throw new Error("This error will be caught");
} catch (error) {
    console.error("Inside catch block:", error.message);
}   finally {
    console.log("Inside finally block (always executes)");
}

// Output:
// Inside try block
// Inside catch block: This error will be caught
// Inside finally block (always executes)


// Task 4: Custom Error Class

JavaScript
class ValidationFailedError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationFailedError";
    }
}

function validateUserInput(input) {
    try {
        if (input.trim() === "") {
            throw new ValidationFailedError("Input cannot be empty!");
        }
        return input;
    } catch (error) {
        if (error.name === "ValidationFailedError") {
            console.error("Validation error:", error.message);
        } else {
            console.error("Unexpected error:", error.message);
        }
        return null; // Or handle the error differently
    }
}

const validInput = validateUserInput("Hello");
console.log(validInput); // Output: Hello

const emptyInput = validateUserInput("");
console.log(emptyInput); // Output: Validation error: Input cannot be empty! (or null)


// Task 5: Custom Error for Validation

// (Covered in Task 4)


// Task 6: Promise Rejection Handling

const promise = new Promise((resolve, reject) => {
    const random = Math.random();
        if (random < 0.5) {
            resolve("Promise resolved!");
        } else {
            reject(new Error("Promise rejected!"));
        }
});

promise
    .then((message) => console.log(message))
    .catch((error) => console.error("Promise error:", error.message));

// Output (randomly resolves or rejects):
// Promise resolved!
// OR
// Promise error: Promise rejected!


// Task 7: Try-Catch with Async Function

async function fetchData() {
    try {
        const response = await fetch("https://example.com/invalid-url"); // Replace with a valid URL for testing resolution
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}

fetchData(); // Output (when using invalid URL): Fetch error: ... (network error message)


// Task 8: Fetch Error Handling with .catch()

fetch("https://example.com/invalid-url") // Replace with a valid URL for testing resolution
    .catch((error) => console.error("Fetch error:", error.message));

// Output (when using invalid URL): Fetch error:



// Feature Request 1: Basic Error Handling Script

function basicErrorHandler() {
    try {
        console.log("Inside try block");
        throw new Error("This is an intentional error!");
    } catch (error) {
        console.error("Inside catch block:", error.message);
    } finally {
        console.log("Inside finally block (always executes)");
    }
}

basicErrorHandler();

// Output:
// Inside try block
// Inside catch block: This is an intentional error!
// Inside finally block (always executes)


// Feature Request 2: Custom Error Script

class ValidationFailedError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationFailedError";
    }
}

function validateAndProcessInput(input) {
    try {
        if (input.trim() === "") {
        throw new ValidationFailedError("Input cannot be empty!");
    }
    console.log("Valid input:", input);
    // Process the valid input here (e.g., call another function)
    } catch (error) {
        if (error.name === "ValidationFailedError") {
            console.error("Validation error:", error.message);
        } else {
            console.error("Unexpected error:", error.message);
        }
    }
}

validateAndProcessInput("Hello world!");  // Output: Valid input: Hello world!
validateAndProcessInput("");              // Output: Validation error: Input cannot be empty!


// Feature Request 3: Promise Error Handling Script

async function fetchDataWithPromiseErrorHandling() {
    try {
        const promise = new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5) {
            resolve("Promise resolved!");
        } else {
            reject(new Error("Promise rejected!"));
        }
    });

    const message = await promise;
    console.log(message);
    } catch (error) {
        console.error("Promise error:", error.message);
    }
}

fetchDataWithPromiseErrorHandling();

// Output (randomly resolves or rejects):
// Promise resolved!
// OR
// Promise error: Promise rejected!


// Feature Request 4: Fetch Error Handling Script

async function fetchDataWithFetchErrorHandling() {
try {
    const response = await fetch("https://example.com/invalid-url"); // Replace with a valid URL for testing resolution
    const data = await response.json();
    console.log(data);
        } catch (error) {
            console.error("Fetch error:", error.message);
            // Optionally provide feedback to the user (e.g., display an error message)
        }
}

fetchDataWithFetchErrorHandling();

// Output (when using invalid URL): Fetch error: ... (network error message)


