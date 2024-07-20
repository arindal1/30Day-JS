
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Alice";
const age = 30;
console.log(`Name: ${name}, Age: ${age}`);


// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `This is a multi-line string.
It spans multiple lines.
Using template literals makes it easy.`;
console.log(multiLineString);


// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10, 20, 30, 40, 50];
const [first, second] = numbers;
console.log(first, second);


// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);


// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
console.log(newArray);


// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4, 5));


// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const multiply = (a, b = 1) => a * b;
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5


// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const createPerson = (name, age) => {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
};
const person = createPerson("Alice", 30);
console.log(person);
person.greet();


// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "favoriteColor";
const color = "blue";
const obj = {
    [propName]: color
};
console.log(obj);


// Feature Request 1: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
const userName = "Bob";
const userAge = 25;
const userGreeting = `Hello, my name is ${userName} and I am ${userAge} years old.`;
console.log(userGreeting);

const longString = `This is a long string.
It spans across multiple lines.
Using template literals makes it easy and readable.`;
console.log(longString);


// Feature Request 2: Create a script that uses array and object destructuring to extract values and log them.
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

const car = {
    make: "Tesla",
    model: "Model S",
    year: 2020
};
const { make, model } = car;
console.log(`Make: ${make}, Model: ${model}`);


// Feature Request 3: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

const addNumbers = (...nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(addNumbers(1, 2, 3, 4, 5));


// Feature Request 4: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
const divide = (a, b = 1) => a / b;
console.log(divide(10, 2)); // 5
console.log(divide(10)); // 10


// Feature Request 5: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
const createAnimal = (species, sound) => {
    return {
        species,
        sound,
        makeSound() {
            console.log(`${this.species} says ${this.sound}`);
        }
    };
};
const dog = createAnimal("Dog", "Woof");
console.log(dog);
dog.makeSound();

const dynamicProp = "isMammal";
const animal = {
    name: "Elephant",
    [dynamicProp]: true
};
console.log(animal);
