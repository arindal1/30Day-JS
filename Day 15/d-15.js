// Task 1: Function Returning Another Function

function outerFunction() {
    let outerVariable = "I'm outside!";
    return function innerFunction() {
        console.log(outerVariable);
    }
}

const innerFunc1 = outerFunction();
innerFunc1(); // Output: "I'm outside!"


// Task 2: Private Counter Closure

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounter();
counter.increment();
console.log(counter1.getCount()); // Output: 1
counter.increment();
console.log(counter1.getCount()); // Output: 2


// Task 3: Unique ID Generator

function createUniqueIdGenerator() {
    let lastId = 0;
    return function() {
        lastId++;
        return lastId;
    }
}

const generateId1 = createUniqueIdGenerator();
console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2
console.log(generateId()); // Output: 3


// Task 4: Closure Capturing User's Name

function greetUser(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    }
}

const greetJohn = greetUser("John");
greetJohn(); // Output: "Hello, John!"


// Task 5: Correct Index Logging

function createFunctionArray() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const functionArray1 = createFunctionArray();
functionArray1[0](); // Output: 0
functionArray1[1](); // Output: 1
functionArray1[2](); // Output: 2
functionArray1[3](); // Output: 3
functionArray1[4](); // Output: 4


// Task 6: Item Collection Module

const ItemCollection = (function() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            items = items.filter(i => i !== item);
        },
        listItems: function() {
            return items;
        }
    };
})();

ItemCollection.addItem("Apple");
ItemCollection.addItem("Banana");
console.log(ItemCollection.listItems()); // Output: ["Apple", "Banana"]
ItemCollection.removeItem("Apple");
console.log(ItemCollection.listItems()); // Output: ["Banana"]


// Task 7: Memoize Function

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function slowFunction(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

const memoizedFunction1 = memoize(slowFunction);
console.log(memoizedFunction1(10000)); // Output: (sum of numbers 0 to 10000)
console.log(memoizedFunction1(10000)); // Output: Retrieved from cache


// Task 8: Memoized Factorial Function

function memoizeFactorial() {
    const cache = {};
    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0) {
            return 1;
        }
        const result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }
}

const memoizedFactorial1 = memoizeFactorial();
console.log(memoizedFactorial1(5)); // Output: 120
console.log(memoizedFactorial1(6)); // Output: 720
console.log(memoizedFactorial1(5)); // Output: Retrieved from cache



// Feature Request 1: Basic Closure Script

function outerFunction() {
    let outerVariable = "I'm outside!";
    return function innerFunction() {
        console.log(outerVariable);
    }
}

const innerFunc2 = outerFunction();
innerFunc2(); // Output: "I'm outside!"


// Feature Request 2: Counter Closure Script

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter2 = createCounter();
counter2.increment();
console.log(counter2.getCount()); // Output: 1
counter2.increment();
console.log(counter2.getCount()); // Output: 2


// Feature Request 3: Unique ID Generator Script

function createUniqueIdGenerator() {
    let lastId = 0;
    return function() {
        lastId++;
        return lastId;
    }
}

const generateId2 = createUniqueIdGenerator();
console.log(generateId2()); // Output: 1
console.log(generateId2()); // Output: 2
console.log(generateId2()); // Output: 3


// Feature Request 4: Loop Closure Script

function createFunctionArray() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const functionArray2 = createFunctionArray();
functionArray2[0](); // Output: 0
functionArray2[1](); // Output: 1
functionArray2[2](); // Output: 2
functionArray2[3](); // Output: 3
functionArray2[4](); // Output: 4


// Feature Request 5: Memoization Script

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function slowFunction(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

const memoizedFunction2 = memoize(slowFunction);
console.log(memoizedFunction2(10000)); // Output: (sum of numbers 0 to 10000)
console.log(memoizedFunction2(10000)); // Output: Retrieved from cache

function memoizeFactorial() {
    const cache = {};
    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0) {
            return 1;
        }
        const result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }
}

const memoizedFactorial2 = memoizeFactorial();
console.log(memoizedFactorial2(5)); // Output: 120
console.log(memoizedFactorial2(6)); // Output: 720
console.log(memoizedFactorial2(5)); // Output: Retrieved from cache


