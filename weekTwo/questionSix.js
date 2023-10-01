// Implement a queue data structure using two stacks. Analyze the time
// complexity of enqueue and dequeue operations.Trees, Binary Trees, Binary
// Search Trees:

// To implement a queue data structure using two stacks, we can use the following algorithm:
// Enqueue operation:

// Push the new element onto stack 1.
// Dequeue operation:

// If stack 2 is empty, then pop all elements from stack 1 and push them onto stack 2.
// Pop the top element from stack 2 and return it.
// The time complexity of the enqueue operation is O(1), since we simply push the new element onto stack 1. The time complexity of the dequeue operation is O(n) in the worst case, since we may need to pop all elements from stack 1 and push them onto stack 2. However, the average-case time complexity of the dequeue operation is O(1).

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
