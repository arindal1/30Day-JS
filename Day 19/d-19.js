// Activity 1: Basic Regular Expressions

// Task 1: Match all occurrences of the word "JavaScript" in a string
function matchJavaScript(str) {
    let regex = /JavaScript/g;
    return str.match(regex);
}
console.log("Match 'JavaScript':", matchJavaScript("I love JavaScript. JavaScript is great!"));


// Task 2: Match all digits in a string
function matchDigits(str) {
    let regex = /\d/g;
    return str.match(regex);
}
console.log("Match Digits:", matchDigits("My phone number is 123-456-7890."));


// Activity 2: Character Classes and Quantifiers

// Task 3: Match all words in a string that start with a capital letter
function matchCapitalWords(str) {
    let regex = /\b[A-Z][a-z]*\b/g;
    return str.match(regex);
}
console.log("Match Capital Words:", matchCapitalWords("Hello World, Welcome to JavaScript."));


// Task 4: Match all sequences of one or more digits in a string
function matchDigitSequences(str) {
    let regex = /\d+/g;
    return str.match(regex);
}
console.log("Match Digit Sequences:", matchDigitSequences("There are 123 apples and 456 oranges."));


// Activity 3: Grouping and Capturing

// Task 5: Capture area code, central office code, and line number from a US phone number
function capturePhoneNumberComponents(phoneNumber) {
    let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    let match = phoneNumber.match(regex);
    return match ? { areaCode: match[1], centralOfficeCode: match[2], lineNumber: match[3] } : null;
}
console.log("Capture Phone Number Components:", capturePhoneNumberComponents("(123) 456-7890"));


// Task 6: Capture username and domain from an email address
function captureEmailComponents(email) {
    let regex = /(\w+)@(\w+\.\w+)/;
    let match = email.match(regex);
    return match ? { username: match[1], domain: match[2] } : null;
}
console.log("Capture Email Components:", captureEmailComponents("example@test.com"));


// Activity 4: Assertions and Boundaries

// Task 7: Match a word only if it is at the beginning of a string
function matchWordAtStart(str, word) {
    let regex = new RegExp(`^${word}\\b`);
    return str.match(regex);
}
console.log("Match Word at Start:", matchWordAtStart("Hello world", "Hello"));


// Task 8: Match a word only if it is at the end of a string
function matchWordAtEnd(str, word) {
    let regex = new RegExp(`\\b${word}$`);
    return str.match(regex);
}
console.log("Match Word at End:", matchWordAtEnd("Hello world", "world"));


// Activity 5: Practical Applications

// Task 9: Validate a simple password
function validatePassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}
console.log("Validate Password:", validatePassword("Password123!"));


// Task 10: Validate a URL
function validateURL(url) {
    let regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-./?%&=]*)?$/;
    return regex.test(url);
}
console.log("Validate URL:", validateURL("https://www.example.com"));



// Feature Requests

// Feature Request 1: Basic Regex Script
console.log("Feature Request 1:");
console.log("Match 'JavaScript':", matchJavaScript("I love JavaScript. JavaScript is great!"));
console.log("Match Digits:", matchDigits("My phone number is 123-456-7890."));


// Feature Request 2: Character Classes and Quantifiers Script
console.log("Feature Request 2:");
console.log("Match Capital Words:", matchCapitalWords("Hello World, Welcome to JavaScript."));
console.log("Match Digit Sequences:", matchDigitSequences("There are 123 apples and 456 oranges."));


// Feature Request 3: Grouping and Capturing Script
console.log("Feature Request 3:");
console.log("Capture Phone Number Components:", capturePhoneNumberComponents("(123) 456-7890"));
console.log("Capture Email Components:", captureEmailComponents("example@test.com"));


// Feature Request 4: Assertions and Boundaries Script
console.log("Feature Request 4:");
console.log("Match Word at Start:", matchWordAtStart("Hello world", "Hello"));
console.log("Match Word at End:", matchWordAtEnd("Hello world", "world"));


// Feature Request 5: Validation Script
console.log("Feature Request 5:");
console.log("Validate Password:", validatePassword("Password123!"));
console.log("Validate URL:", validateURL("https://www.example.com"));
