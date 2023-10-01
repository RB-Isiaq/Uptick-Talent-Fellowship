// 1. Time and Space Complexity Analysis:
// Analyze the time and space complexity, including
// the best-case, worst-case, and average-case scenarios of the below algorithm.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  const fib = new Array(n + 1);
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}

console.log(fibonacci(6));

// Time Complexity:

// Best Case: The best-case scenario occurs when n is 0 or 1, and the function directly returns n. In this case, the algorithm has a constant time complexity of O(1).
// There is no iteration whatsoever in this case
console.log(fibonacci(0));
console.log(fibonacci(1));

// However,
// Worst Case: The worst-case scenario occurs when n > 1, and the algorithm calculates the Fibonacci sequence up to n. In this case, the algorithm uses a loop that iterates n times to compute each Fibonacci number. Therefore, the worst-case time complexity is O(n) linear time compleity, because the time it takes to compute each Fibonacci number is proportional to the value of n.
// Basically, the number of time increases as n increases
console.log(fibonacci(6));
// Average Case: The average-case time complexity is also O(n) because, on average, the algorithm needs to calculate approximately n Fibonacci numbers. The time it takes to compute each number depends on its value but remains linearly proportional to n overall.

// Space Complexity:

// The space complexity of the algorithm is determined by the space required to store the Fibonacci numbers in the fib array.

// The space complexity of this algorithm is O(n) because it uses an additional array whose size scales linearly with the input n.
