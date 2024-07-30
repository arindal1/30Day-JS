// Task 1: Recursive Factorial Function

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040
console.log(factorial(10)); // Output: 3628800


// Task 2: Recursive Fibonacci Function

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(15)); // Output: 610


// Task 3: Recursive Sum of Array Elements

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray([7, 14, 21])); // Output: 42


// Task 4: Recursive Maximum Element in Array

function maxArray(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], maxArray(arr.slice(1)));
}

console.log(maxArray([1, 2, 3, 4, 5])); // Output: 5
console.log(maxArray([10, 20, 30])); // Output: 30
console.log(maxArray([7, 14, 21])); // Output: 21


// Task 5: Recursive String Reversal

function reverseString(str) {
    if (str.length === 0) return "";
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("javascript")); // Output: "tpircsavaj"


// Task 6: Recursive Palindrome Check

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("madam")); // Output: true


// Task 7: Recursive Binary Search

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // Output: -1
console.log(binarySearch([7, 14, 21, 28, 35], 28)); // Output: 3


// Task 8: Recursive Count Occurrences

function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: 3
console.log(countOccurrences([10, 20, 30, 20, 40], 20)); // Output: 2
console.log(countOccurrences([7, 14, 21, 14, 28, 14], 14)); // Output: 3


// Task 9: Recursive In-Order Traversal

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
inOrderTraversal(root1); // Output: 2, 1, 3


// Task 10: Recursive Tree Depth Calculation

function calculateDepth(node) {
    if (node === null) return 0;
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log(calculateDepth(tree)); // Output: 3



// Feature Request 1: Factorial and Fibonacci Script

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(factorial(5)); // Output: 120
console.log(fibonacci(10)); // Output: 55



// Feature Request 2: Array Recursion Script

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

function maxArray(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], maxArray(arr.slice(1)));
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(maxArray([10, 20, 30])); // Output: 30



// Feature Request 3: String Recursion Script

function reverseString(str) {
    if (str.length === 0) return "";
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(isPalindrome("racecar")); // Output: true



// Feature Request 4: Recursive Search Script

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}

function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: 3



// Feature Request 5: Tree Traversal Script

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

function calculateDepth(node) {
    if (node === null) return 0;
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
inOrderTraversal(root2); // Output: 2, 1, 3
console.log(calculateDepth(root2)); // Output: 2
