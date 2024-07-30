// Activity 1: Sorting Algorithms

// Task 1: Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
            }
        }
    }
    return arr;
}
console.log("Bubble Sort:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));


// Task 2: Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
    }
    return arr;
}
console.log("Selection Sort:", selectionSort([64, 25, 12, 22, 11]));


// Task 3: Quicksort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log("Quicksort:", quickSort([10, 7, 8, 9, 1, 5]));


// Activity 2: Searching Algorithms

// Task 4: Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log("Linear Search:", linearSearch([10, 20, 30, 40, 50], 30));


// Task 5: Binary Search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log("Binary Search:", binarySearch([2, 3, 4, 10, 40], 10));


// Activity 3: String Algorithms

// Task 6: Count Character Occurrences
function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
console.log("Character Occurrences:", countCharacters("hello world"));


// Task 7: Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeatingChars(str) {
    let charSet = new Set();
    let left = 0, right = 0;
    let maxLength = 0;
    while (right < str.length) {
        if (!charSet.has(str[right])) {
            charSet.add(str[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            charSet.delete(str[left]);
            left++;
        }
    }
    return maxLength;
}
console.log("Longest Substring Without Repeating Characters:", longestSubstringWithoutRepeatingChars("abcabcbb"));


// Activity 4: Array Algorithms

// Task 8: Rotate Array by k Positions
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log("Rotate Array by k Positions:", rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Task 9: Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log("Merge Two Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));


// Activity 5: Dynamic Programming (Optional)

// Task 10: Fibonacci Sequence Using Dynamic Programming
function fibonacciDP(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}
console.log("Fibonacci Sequence (DP):", fibonacciDP(10));


// Task 11: Knapsack Problem Using Dynamic Programming
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}
console.log("Knapsack Problem (DP):", knapsack([60, 100, 120], [10, 20, 30], 50));



// Feature Requests

// Feature Request 1: Sorting Algorithm Script
console.log("Feature Request 1:");
console.log("Bubble Sort:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log("Selection Sort:", selectionSort([64, 25, 12, 22, 11]));
console.log("Quicksort:", quickSort([10, 7, 8, 9, 1, 5]));

// Feature Request 2: Searching Algorithm Script
console.log("Feature Request 2:");
console.log("Linear Search:", linearSearch([10, 20, 30, 40, 50], 30));
console.log("Binary Search:", binarySearch([2, 3, 4, 10, 40], 10));

// Feature Request 3: String Algorithm Script
console.log("Feature Request 3:");
console.log("Character Occurrences:", countCharacters("hello world"));
console.log("Longest Substring Without Repeating Characters:", longestSubstringWithoutRepeatingChars("abcabcbb"));

// Feature Request 4: Array Algorithm Script
console.log("Feature Request 4:");
console.log("Rotate Array by k Positions:", rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log("Merge Two Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// Feature Request 5: Dynamic Programming Script
console.log("Feature Request 5:");
console.log("Fibonacci Sequence (DP):", fibonacciDP(10));
console.log("Knapsack Problem (DP):", knapsack([60, 100, 120], [10, 20, 30], 50));
