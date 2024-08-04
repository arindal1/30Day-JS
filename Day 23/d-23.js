// Activity 1: Median of Two Sorted Arrays
function findMedianSortedArrays(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = merged.length;
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
}

// Test cases for Median of Two Sorted Arrays
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5



// Activity 2: Merge k Sorted Lists
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    while (lists.length > 1) {
        let mergedList = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedList.push(mergeTwoLists(l1, l2));
        }
        lists = mergedList;
    }
    return lists[0];
}

function mergeTwoLists(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;

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

    if (l1 !== null) current.next = l1;
    if (l2 !== null) current.next = l2;

    return dummyHead.next;
}

function logLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Test cases for Merge k Sorted Lists
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));
logLinkedList(mergeKLists([l1, l2, l3])); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6



// Activity 3: Trapping Rain Water
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }
    return totalWater;
}

// Test cases for Trapping Rain Water
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9



// Activity 4: N-Queens
function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    function solve(board, row) {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                solve(board, row + 1);
                board[row][col] = '.';
            }
        }
    }

    solve(board, 0);
    return results;
}

// Test cases for N-Queens
console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]



// Activity 5: Word Ladder
function ladderLength(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while (queue.length) {
        let [word, length] = queue.shift();

        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
}

// Test cases for Word Ladder
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0



// Feature Request 1: Median of Two Sorted Arrays Script
function medianOfTwoSortedArraysScript() {
    console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
    console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
}
medianOfTwoSortedArraysScript();

// Feature Request 2: Merge k Sorted Lists Script
function mergeKSortedListsScript() {
    let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
    let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    let l3 = new ListNode(2, new ListNode(6));
    logLinkedList(mergeKLists([l1, l2, l3])); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
}
mergeKSortedListsScript();

// Feature Request 3: Trapping Rain Water Script
function trappingRainWaterScript() {
    console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
    console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
}
trappingRainWaterScript();

// Feature Request 4: N-Queens Script
function nQueensScript() {
    console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
}
nQueensScript();

// Feature Request 5: Word Ladder Script
function wordLadderScript() {
    console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
    console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0
}
wordLadderScript();
