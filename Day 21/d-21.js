// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Test cases for Two Sum
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode
function reverseInteger(x) {
    const sign = x < 0 ? -1 : 1;
    const reversed = parseInt(x.toString().split('').reverse().join('')) * sign;
    if (reversed < -(2**31) || reversed > 2**31 - 1) return 0;
    return reversed;
}

// Test cases for Reverse Integer
console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21
console.log(reverseInteger(0)); // 0

// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode
function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

// Test cases for Palindrome Number
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(0)); // true

// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

// Helper function to create linked lists for testing
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print linked lists
function listToArray(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

// Test cases for Merge Two Sorted Lists
const l1 = arrayToList([1, 2, 4]);
const l2 = arrayToList([1, 3, 4]);
console.log(listToArray(mergeTwoLists(l1, l2))); // [1, 1, 2, 3, 4, 4]

// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else if (stack.length === 0 || map[stack.pop()] !== char) {
            return false;
        }
    }
    return stack.length === 0;
}

// Test cases for Valid Parentheses
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

// Feature Requests:
// 1. Two Sum Script: Already covered in Task 1
// 2. Reverse Integer Script: Already covered in Task 2
// 3. Palindrome Number Script: Already covered in Task 3
// 4. Merge Two Sorted Lists Script: Already covered in Task 4
// 5. Valid Parentheses Script: Already covered in Task 5
