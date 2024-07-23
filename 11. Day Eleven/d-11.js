// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});

promise1.then(message => console.log(message));


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Promise rejected after 2 seconds");
    }, 2000);
});

promise2.catch(error => console.log(error));


// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData1 = new Promise((resolve) => {
    setTimeout(() => resolve("Data 1 fetched"), 1000);
});

const fetchData2 = new Promise((resolve) => {
    setTimeout(() => resolve("Data 2 fetched"), 2000);
});

const fetchData3 = new Promise((resolve) => {
    setTimeout(() => resolve("Data 3 fetched"), 3000);
});

fetchData1
    .then(data => {
        console.log(data);
        return fetchData2;
    })
    .then(data => {
        console.log(data);
        return fetchData3;
    })
    .then(data => console.log(data));


// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const promise4 = new Promise((resolve) => {
    setTimeout(() => resolve("Async/Await resolved"), 2000);
});

async function asyncFunction() {
    const result = await promise4;
    console.log(result);
}

asyncFunction();


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

const promise5 = new Promise((_, reject) => {
    setTimeout(() => reject("Async/Await rejected"), 2000);
});

async function asyncFunctionWithCatch() {
    try {
        const result = await promise5;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncFunctionWithCatch();


// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch("https://api.publicapis.org/entries")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {
    try {
        const response = await fetch("https://api.publicapis.org/entries");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();


// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promiseA = new Promise((resolve) => setTimeout(() => resolve("A"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("B"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("C"), 3000));

Promise.all([promiseA, promiseB, promiseC])
    .then(values => console.log(values))
    .catch(error => console.error(error));


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promiseX = new Promise((resolve) => setTimeout(() => resolve("X"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Y"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Z"), 3000));

Promise.race([promiseX, promiseY, promiseZ])
    .then(value => console.log(value))
    .catch(error => console.error(error));


// Feature Request 1: Promise Creation Script

// Resolved Promise
const promise10 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});

promise10.then(message => console.log(message));

// Rejected Promise
const promise11 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Promise rejected after 2 seconds");
    }, 2000);
});

promise11.catch(error => console.log(error));


// Feature Request 2: Promise Chaining Script

const fetchData21 = new Promise((resolve) => {
    setTimeout(() => resolve("Data 21 fetched"), 1000);
});

const fetchData22 = new Promise((resolve) => {
    setTimeout(() => resolve("Data 22 fetched"), 2000);
});

const fetchData23 = new Promise((resolve) => {
    setTimeout(() => resolve("Data 23 fetched"), 3000);
});

fetchData21
    .then(data => {
        console.log(data);
        return fetchData22;
    })
    .then(data => {
        console.log(data);
        return fetchData23;
    })
    .then(data => console.log(data));


// Feature Request 3: Async/Await Script

// Resolved Promise
const promise12 = new Promise((resolve) => {
    setTimeout(() => resolve("Async/Await resolved"), 2000);
});

async function asyncFunction() {
    const result = await promise12;
    console.log(result);
}

asyncFunction();

// Rejected Promise
const promise13 = new Promise((_, reject) => {
    setTimeout(() => reject("Async/Await rejected"), 2000);
});

async function asyncFunctionWithCatch() {
    try {
        const result = await promise13;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncFunctionWithCatch();


// Feature Request 4: API Fetch Script

// Fetch using Promises
fetch("https://api.publicapis.org/entries")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Fetch using Async/Await
async function fetchData() {
    try {
        const response = await fetch("https://api.publicapis.org/entries");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();


// Feature Request 5: Concurrent Promises Script

// Promise.all
const promiseA1 = new Promise((resolve) => setTimeout(() => resolve("A1"), 1000));
const promiseB1 = new Promise((resolve) => setTimeout(() => resolve("B1"), 2000));
const promiseC1 = new Promise((resolve) => setTimeout(() => resolve("C1"), 3000));

Promise.all([promiseA1, promiseB1, promiseC1])
    .then(values => console.log(values))
    .catch(error => console.error(error));

// Promise.race
const promiseX1 = new Promise((resolve) => setTimeout(() => resolve("X1"), 1000));
const promiseY1 = new Promise((resolve) => setTimeout(() => resolve("Y1"), 2000));
const promiseZ1 = new Promise((resolve) => setTimeout(() => resolve("Z1"), 3000));

Promise.race([promiseX1, promiseY1, promiseZ1])
    .then(value => console.log(value))
    .catch(error => console.error(error));
