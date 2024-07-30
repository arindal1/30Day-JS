// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    num++;
}

console.log("Sum of numbers from 1 to 10 is:", sum);


// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let number = 5; // Change this value to test different numbers
let factorial = 1;
let j = 1;

do {
    factorial *= j;
    j++;
} while (j <= number);

console.log(`Factorial of ${number} is ${factorial}`);


// Task 7: Write a program to print a pattern using nested for loops.
let rows = 5;

for (let i = 1; i <= rows; i++) {
let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
console.log(pattern);
}


// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}


// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}


// Feature Request 1: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

// Using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using while loop
let numWhile = 1;

while (numWhile <= 10) {
    console.log(numWhile);
    numWhile++;
}


// Feature Request 2: Create a script that prints the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// Feature Request 3: Write a script that prints a pattern of stars using nested loops.
let totalRows = 5;

for (let i = 5; i <= totalRows; i--) {
    let starPattern = "";
    for (let j = 1; j <= i; j++) {
    starPattern += "* ";
    }
    console.log(starPattern);
}
/*
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
*/

// Feature Request 4: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
let totalSum = 0;
let numberToSum = 1;

while (numberToSum <= 10) {
    totalSum += numberToSum;
    numberToSum++;
}

console.log("Sum of numbers from 1 to 10 is:", totalSum);


// Feature Request 5: Create a script that calculates the factorial of a number using a do...while loop.
let factorialNumber = 5; // Change this value to test different numbers
let totalFactorial = 1;
let k = 1;

do {
    totalFactorial *= k;
    k++;
} while (k <= factorialNumber);

console.log(`Factorial of ${factorialNumber} is ${totalFactorial}`);
