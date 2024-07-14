## Activity 1: Arithmetic Operations

### Task 1: Write a program to add two numbers and log the result to the console.
```javascript
// Task 1:
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log('Addition:', sum);  // Output: 15
```

### Task 2: Write a program to subtract two numbers and log the result to the console.
```javascript
// Task 2:
let difference = num1 - num2;
console.log('Subtraction:', difference);  // Output: 5
```

### Task 3: Write a program to multiply two numbers and log the result to the console.
```javascript
// Task 3:
let product = num1 * num2;
console.log('Multiplication:', product);  // Output: 50
```

### Task 4: Write a program to divide two numbers and log the result to the console.
```javascript
// Task 4:
let quotient = num1 / num2;
console.log('Division:', quotient);  // Output: 2
```

### Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
```javascript
// Task 5:
let remainder = num1 % num2;
console.log('Remainder:', remainder);  // Output: 0
```

## Activity 2: Assignment Operators

### Task 6: Use the + operator to add a number to a variable and log the result to the console. 
```javascript
// Task 6:
let a = 20;
a += 10;
console.log('Addition Assignment:', a);  // Output: 30
```

### Task 7: Use the operator to subtract a number from a variable and log the result to the console.
```javascript
// Task 7:
a -= 5;
console.log('Subtraction Assignment:', a);  // Output: 25
```

## Activity 3: Comparison Operators

### Task 8: Write a program to compare two numbers using > and < and log the result to the console.
```javascript
// Task 8:
let b = 15;
let c = 10;
console.log('Greater Than:', b > c);  // Output: true
console.log('Less Than:', b < c);  // Output: false
```

### Task 9: Write a program to compare two numbers using > and <= and log the result to the console. 
```javascript
// Task 9:
console.log('Greater Than or Equal:', b >= c);  // Output: true
console.log('Less Than or Equal:', b <= c);  // Output: false
```

### Task 10: Write a program to compare two numbers using == and === and log the result to the console.
```javascript
// Task 10:
let d = '10';
console.log('Equality:', c == d);  // Output: true (checks value only)
console.log('Strict Equality:', c === d);  // Output: false (checks value and type)
```

## Activity 4: Logical Operators

### Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
```javascript
// Task 11:
let e = true;
let f = false;
console.log('Logical AND:', e && f);  // Output: false
```

### Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
```javascript
// Task 12:
console.log('Logical OR:', e || f);  // Output: true
```

### Task 13: Write a program that uses the operator to negate a condition and log the result to the console.
```javascript
// Task 13:
console.log('Logical NOT:', !e);  // Output: false
```

## Activity 5: Ternary Operator

### Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
```javascript
// Task 14:
let g = -5;
let result = g >= 0 ? 'Positive' : 'Negative';
console.log('Ternary Operator:', result);  // Output: Negative
```

## Feature Requests

### Arithmetic Operations Script : Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
```javascript
// Arithmetic Operations Script
let numA = 20;
let numB = 10;

console.log('Addition:', numA + numB);
console.log('Subtraction:', numA - numB);
console.log('Multiplication:', numA * numB);
console.log('Division:', numA / numB);
console.log('Remainder:', numA % numB);
```

### Comparison and Logical Operators Script : Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
```javascript
// Comparison and Logical Operators Script
let x = 10;
let y = 20;

console.log('Greater Than:', x > y);
console.log('Less Than:', x < y);
console.log('Greater Than or Equal:', x >= y);
console.log('Less Than or Equal:', x <= y);
console.log('Equality:', x == y);
console.log('Strict Equality:', x === y);

console.log('Logical AND:', (x < y) && (x > 0));
console.log('Logical OR:', (x > y) || (x > 0));
console.log('Logical NOT:', !(x > y));
```

### Ternary Operator Script : Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
```javascript
// Ternary Operator Script
let number = 5;
let check = number >= 0 ? 'Positive' : 'Negative';
console.log('Ternary Operator:', check);  // Output: Positive
```
