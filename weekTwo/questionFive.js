// Implement the merge sort algorithm for sorting a linked list. Analyze the time and space complexity of your implementation.

function mergeSortLinkedList(head) {
  // If the linked list is empty or has only one node, it is already sorted.
  if (head === null || head.next === null) {
    return head; // This is O(1) constant time
  }

  // Divide the linked list into two halves.
  const [leftHead, rightHead] = divideLinkedListIntoTwoHalves(head);

  // Recursively sort the two halves of the linked list.
  const leftSortedHead = mergeSortLinkedList(leftHead);
  const rightSortedHead = mergeSortLinkedList(rightHead);

  // Merge the two sorted halves of the linked list.
  return mergeTwoSortedLinkedLists(leftSortedHead, rightSortedHead);
}

function divideLinkedListIntoTwoHalves(head) {
  // Find the middle node of the linked list.
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Divide the linked list into two halves at the middle node.
  const rightHead = slow.next;
  slow.next = null;

  return [head, rightHead];
}

function mergeTwoSortedLinkedLists(leftHead, rightHead) {
  // Create a dummy node to store the sorted linked list.
  const dummyNode = new Node(null);
  let currentNode = dummyNode;

  // While both left and right linked lists are not empty.
  while (leftHead !== null && rightHead !== null) {
    // Compare the elements of the two linked lists and add the smaller element to
    // the sorted linked list.
    if (leftHead.data <= rightHead.data) {
      currentNode.next = leftHead;
      leftHead = leftHead.next;
    } else {
      currentNode.next = rightHead;
      rightHead = rightHead.next;
    }

    currentNode = currentNode.next;
  }

  // Add the remaining elements of the left and right linked lists to the sorted
  // linked list.
  currentNode.next = leftHead !== null ? leftHead : rightHead;

  return dummyNode.next;
}

//   Time complexity analysis:

//   The time complexity of the merge sort algorithm for sorting a linked list is O(n log n) in the worst case. This is because the algorithm needs to divide the linked list into two halves and then recursively sort the two halves. The merge step also takes O(n) time in the worst case.

//   Space complexity analysis:

//   The space complexity of the merge sort algorithm for sorting a linked list is O(n) in the worst case. This is because the algorithm needs to create a temporary linked list to store the sorted elements.

//   Overall, merge sort is a good algorithm for sorting linked lists, especially when the linked list is very large.
