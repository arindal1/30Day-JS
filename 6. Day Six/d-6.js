
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);


// Task 2: Access the first and last elements of the array and log them to the console.
const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];
console.log('First Element:', firstElement);
console.log('Last Element:', lastElement);


// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log('After push:', numbers);


// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log(numbers);


// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log(numbers);


// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(0);
console.log(numbers);


// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);


// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`Sum of numbers: ${sum}`);


// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// Task 11: Use the forEach method to iterate over the array and log each element to the console.
numbers.forEach(num => console.log(num));


// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);


// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[1][2]; // Accessing element 6
console.log(`Specific element: ${specificElement}`);


// Feature Request 1: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
const arrayManipulation = () => {
    const arr = [1, 2, 3];
    console.log('Initial array:', arr);

    arr.push(4);
    console.log('After push:', arr);

    arr.pop();
    console.log('After pop:', arr);

    arr.shift();
    console.log('After shift:', arr);

    arr.unshift(0);
    console.log('After unshift:', arr);
};

arrayManipulation();


// Feature Request 2: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
const arrayTransformation = () => {
    const arr = [1, 2, 3, 4, 5];

    const doubled = arr.map(num => num * 2);
    console.log('Doubled:', doubled);

    const evens = arr.filter(num => num % 2 === 0);
    console.log('Evens:', evens);

    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log('Sum:', sum);
};

arrayTransformation();


// Feature Request 3: Write a script that iterates over an array using both for loop and forEach method and logs each element.
const arrayIteration = () => {
    const arr = [1, 2, 3, 4, 5];

    console.log('Using for loop:');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    console.log('Using forEach:');
    arr.forEach(num => console.log(num));
};

arrayIteration();


// Feature Request 4: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
const twoDimensionalArray = () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log('Matrix:', matrix);

    const element = matrix[2][1]; // Accessing element 8
    console.log('Specific element:', element);

    matrix[0][0] = 0; // Modifying an element
    console.log('Modified matrix:', matrix);
};
twoDimensionalArray();
