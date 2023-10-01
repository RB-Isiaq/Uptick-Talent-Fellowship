// Modify the Quick Sort algorithm to use three-way partitioning, which is particularly useful for duplicate keys.

// Three-way partitioning in Quick Sort is a modification that is indeed useful for sorting arrays with duplicate keys efficiently. Instead of the traditional two-way partitioning, where elements are divided into elements smaller and larger than a chosen pivot, three-way partitioning divides the array into three parts: elements smaller than the pivot, elements equal to the pivot, and elements larger than the pivot.

function quickSort(arr, low, high) {
  if (low < high) {
    let { left, right } = threeWayPartition(arr, low, high);
    quickSort(arr, low, left - 1);
    quickSort(arr, right + 1, high);
  }
}

function threeWayPartition(arr, low, high) {
  let pivot = arr[low];
  let left = low;
  let right = high;
  let i = low;

  while (i <= right) {
    if (arr[i] < pivot) {
      swap(arr, i, left);
      left++;
      i++;
    } else if (arr[i] > pivot) {
      swap(arr, i, right);
      right--;
    } else {
      i++;
    }
  }

  return { left, right };
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 3, 7, 2, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [1, 2, 2, 3, 4, 4, 7, 7, 9]

// In this modified Quick Sort algorithm:

// We choose a pivot element (typically the first element in the array).
// We partition the array into three parts: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot.
// We recursively apply the Quick Sort algorithm to the subarrays on both sides of the pivot (less than and greater than parts).
// This three-way partitioning approach efficiently handles arrays with duplicate keys because it groups all elements equal to the pivot in the middle, reducing the number of recursive calls needed for those elements.

// The time complexity of this modified Quick Sort algorithm with three-way partitioning is typically O(n log n) in the average case, but it can degrade to O(n^2) in the worst case. However, in practice, it often performs well and is a good choice when dealing with arrays containing many duplicate keys.
