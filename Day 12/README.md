## Activity 1: Basic Error Handling with Try-Catch

**Task 1: Intentional Error Throwing**

* Create a function that throws an error with an informative message.
* Wrap the function call in a `try-catch` block to catch the error and log an appropriate message to the console.

**Task 2: Division by Zero Check**

* Design a function that divides two numbers.
* Within the function, check for division by zero and throw an error if encountered.
* Use a `try-catch` block to handle the potential error and provide a meaningful message.

## Activity 2: Finally Block

**Task 3: Execution Flow Observation**

* Construct a script that includes a `try-catch` block and a `finally` block.
* Log messages within each block (`try`, `catch`, and `finally`) to observe the order of execution.

## Activity 3: Custom Error Objects

**Task 4: Custom Error Class**

* Create a custom error class that inherits from the built-in `Error` class.
* This class should have a constructor to define a custom error name and message.
* Throw an instance of this custom error class in a function.
* Utilize a `try-catch` block to handle the custom error and log a specific message.

**Task 5: Custom Error for Validation**

* Create a function that validates user input (e.g., checking for an empty string).
* If the validation fails, throw a custom error object with a descriptive message.
* Utilize a `try-catch` block to handle the custom error and provide appropriate feedback.

## Activity 4: Error Handling in Promises

**Task 6: Promise Rejection Handling**

* Construct a promise that resolves or rejects based on a random condition.
* Utilize the `.catch()` method to handle the rejection scenario and log a user-friendly message.

**Task 7: Try-Catch with Async Function**

* Design an async function that attempts to fetch data using a promise.
* Wrap the promise call in a `try-catch` block to capture potential errors.
* Log an informative error message if the promise rejects.

## Activity 5: Graceful Error Handling in Fetch

**Task 8: Fetch Error Handling with .catch()**

* Employ the `fetch` API to retrieve data from an invalid URL.
* Utilize the `.catch()` method to capture network or other errors that may occur.
* Log a clear error message to the console.

**Task 9: Try-Catch with Async Function and Fetch**

* Create an async function that uses `fetch` to request data from an invalid URL.
* Wrap the `fetch` call in a `try-catch` block to handle potential errors.
* Log a detailed error message in the `catch` block.

## Feature Requests

**1. Basic Error Handling Script**

* Combine `try-catch` and `finally` blocks to demonstrate error handling and code execution flow.

**2. Custom Error Script**

* Define custom error classes for specific error scenarios.
* Throw and handle these custom errors within `try-catch` blocks to provide informative messages.

**3. Promise Error Handling Script**

* Utilize both `.catch()` and `try-catch` within async functions to manage errors in promises.

**4. Fetch Error Handling Script**

* Implement error handling using `.catch()` or `try-catch` with async functions when fetching data using the `fetch` API.
