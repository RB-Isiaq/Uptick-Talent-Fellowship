// Implement the exponential search algorithm for a sorted array and analyze its time complexity

// First code instance
// function exponentialSearch(arr, target) {
//   const n = arr.length;

//   // If the target element is at the first position
//   if (arr[0] === target) return 0;

//   // Find the range for binary search
//   let i = 1;
//   while (i < n && arr[i] <= target) {
//     i *= 2;
//   }

//   // Perform binary search within the identified range
//   return binarySearch(arr, target, i / 2, Math.min(i, n - 1));
// }

// function binarySearch(arr, target, low, high) {
//   while (low <= high) {
//     const mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) low = mid + 1;
//     else high = mid - 1;
//   }

//   return -1; // Element not found
// }

// Second code instance
function exponentialSearch(array, target) {
  // Find the first power of 2 that is greater than the length of the array.
  let pow = 1;
  while (pow < array.length) {
    pow *= 2;
  }

  // Narrow down the search range using exponential jumps.
  let left = 0;
  let right = pow - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // If the target element is not found in the narrowed search range, perform a
  // binary search on the entire array.
  return binarySearch(array, target, left, right);
}

// Binary search implementation
function binarySearch(array, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = exponentialSearch(arr, target);
console.log(`Element ${target} is found at index ${result}`);

// Time complexity analysis:
// The worst-case time complexity of exponential search is O(log n), where n is the length of the array. This is because the algorithm keeps jumping to the middle of the search range until it finds the target element or the search range is empty. In the worst case, the search range will be empty after O(log n) jumps.

// The best-case time complexity of exponential search is O(1), which occurs when the target element is found in the first jump.

// The average-case time complexity of exponential search is O(log n). This is because the algorithm will typically find the target element in the middle of the search range, after O(log n) jumps.
