// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = 5; // Change this value to test different numbers

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}



// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20; // Change this value to test different ages

if (age >= 18) {
  console.log("The person is eligible to vote.");
} else {
  console.log("The person is not eligible to vote.");
}



// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10; // Change these values to test different numbers
let num2 = 20;
let num3 = 15;

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log("The largest number is:", num1);
  } else {
    console.log("The largest number is:", num3);
  }
} else {
  if (num2 >= num3) {
    console.log("The largest number is:", num2);
  } else {
    console.log("The largest number is:", num3);
  }
}


// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 3; // Change this value to test different days (1-7)

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85; // Change this value to test different scores

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}


// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let numberToCheck = 7; // Change this value to test different numbers

let result = (numberToCheck % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result);


// Task 7: Write a program to check if a year is a leap year using multiple conditions and log the result to the console.
let year = 2024; // Change this value to test different years

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year, "is a leap year.");
} else {
  console.log(year, "is not a leap year.");
}


// Feature Request 1: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
let numCheck = -3; // Change this value to test different numbers

if (numCheck > 0) {
  console.log("The number is positive.");
} else if (numCheck < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}


// Feature Request 2: Create a script to check if a person is eligible to vote based on their age and log the result.
let voterAge = 17; // Change this value to test different ages

if (voterAge >= 18) {
  console.log("The person is eligible to vote.");
} else {
  console.log("The person is not eligible to vote.");
}


// Feature Request 3: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
let weekDay = 5; // Change this value to test different days (1-7)

switch (weekDay) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}


// Feature Request 4: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
let studentScore = 75; // Change this value to test different scores

switch (true) {
  case studentScore >= 90:
    console.log("Grade: A");
    break;
  case studentScore >= 80:
    console.log("Grade: B");
    break;
  case studentScore >= 70:
    console.log("Grade: C");
    break;
  case studentScore >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}


// Feature Request 5: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
let checkYear = 2000; // Change this value to test different years

if ((checkYear % 4 === 0 && checkYear % 100 !== 0) || (checkYear % 400 === 0)) {
  console.log(checkYear, "is a leap year.");
} else {
  console.log(checkYear, "is not a leap year.");
}
