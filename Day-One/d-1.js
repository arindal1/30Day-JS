// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var myNumber = 42;
console.log("Value of myNumber:", myNumber);


// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let myString = "Hello, World!";
console.log("Value of myString:", myString);


// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const myBoolean = true;
console.log("Value of myBoolean:", myBoolean);


// Task 4: Create variables of different data types and log each variable's type using the typeof operator.
let numberVar = 123;
let stringVar = "JavaScript";
let booleanVar = false;
let objectVar = { name: "Arindal", age: 22 };
let arrayVar = [1, 2, 3, 4, 5];

console.log("Type of numberVar:", typeof numberVar); // number
console.log("Type of stringVar:", typeof stringVar); // string
console.log("Type of booleanVar:", typeof booleanVar); // boolean
console.log("Type of objectVar:", typeof objectVar); // object
console.log("Type of arrayVar:", typeof arrayVar); // object (arrays)


// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let reassignVar = "Initial Value";
console.log("Initial value of reassignVar:", reassignVar);

reassignVar = "New Value";
console.log("New value of reassignVar:", reassignVar);


// Task 6: Try reassigning a variable declared with const and observe the error.
const constantVar = "I am constant";
console.log("Initial value of constantVar:", constantVar);

// Uncommenting the below line will cause an error because constantVar is a constant and cannot be reassigned.
// constantVar = "Trying to reassign";
// TypeError: Assignment to constant variable.


// Feature Request 1:
// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let num = 42;
let str = "Hello";
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];

console.log("Value:", num, "Type:", typeof num);
console.log("Value:", str, "Type:", typeof str);
console.log("Value:", bool, "Type:", typeof bool);
console.log("Value:", obj, "Type:", typeof obj);
console.log("Value:", arr, "Type:", typeof arr);


// Feature Request 2:
// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Using let
let reassignLet = "Initial let value";
console.log("Initial value of reassignLet:", reassignLet);

reassignLet = "Reassigned let value";
console.log("Reassigned value of reassignLet:", reassignLet);

// Using const
const reassignConst = "Initial const value";
console.log("Initial value of reassignConst:", reassignConst);

// Uncommenting the below line will cause an error because reassignConst is a constant and cannot be reassigned.
// reassignConst = "Trying to reassign const";
// TypeError: Assignment to constant variable.
