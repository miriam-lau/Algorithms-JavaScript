/** 7.0 Linked Lists Boot Camp
 * Implement a singly linked list and functions: search, insert, delete.
 * Linked list holds a pointer to first node in list.
 * Question: implement as LinkedList class or functions?
 * Insert & Delete: O(1), Search: O(n).
 * head -> A -> B -> C -> null
 */
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

//------------------------------------------------------------------------------

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // linkedList.search(value), called on an instance of the LinkedList class.
  search(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  // Add to the end of the list, linkedList.add(value), called on an instance of
  // the LinkedList class.
  add(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.nextNode = node;
    this.tail = node;
  }

  // Insert nodeB after nodeA, assumes nodeA is not tail;
  // LinkedList.insert(nodeA, nodeB).
  // A -> C, insert B; assign B's nextNode to C, B -> C, then assign A -> B.
  // Create a static method on the class, instances cannot call the method.
  static insert(nodeA, nodeB) {
    nodeB.nextNode = nodeA.nextNode;
    nodeA.nextNode = nodeB;
  }

  // Delete a node after nodeA, assumes nodeA !== tail, LinkedList.delete(nodeB).
  // A -> B -> C, delete B; assign A's nextNode to C, A -> C.
  // Create a static method on the class, instances cannot call the method.
  static remove(nodeA) {
    let deletedNode = nodeA.nextNode;
    nodeA.nextNode = nodeA.nextNode.nextNode;

    return deletedNode;
  }
}

//------------------------------------------------------------------------------
// Implementation as functions.

// search(linkedList, value);
var search = function(linkedList, value) {
  let currentNode = linkedList.head;

  while (currentNode !== null) {
    if (currentNode.value === value) {
      return true;
    }

    currentNode = currentNode.nextNode;
  }

  return false;
}

// Insert a node after another node, insert(nodeA, nodeB).
// A -> C, insert B; assign B's nextNode to C, B -> C, then assign A -> B.
var insert = function(nodeA, nodeB) {
  nodeB.nextNode = nodeA.nextNode;
  nodeA.nextNode = nodeB;
}

// Delete a node after nodeA, assumes nodeA is not the tail, delete(nodeA).
// A -> B -> C, delete B; assign A's nextNode to C, A -> C.
var remove = function(nodeA) {
  let deletedNode = nodeA.nextNode;
  nodeA.nextNode = nodeA.nextNode.nextNode;

  return deletedNode;
}

/** 7.1 Merge Two Sorted Singly Linked Lists
 * Input: two singly linked lists, each node holds a number, lists are sorted.
 * Output: resulting list consists of nodes in ascending order from both lists.
 * Restrictions: can only change field for each node
 * Time Complexity: O(n), n is the length of the longest linked list
 * Space Complexity: O(n + m), n and m are the lengths of listA and listB.
 * List A: 1 -> 4 -> 6 -> 7 -> null
 * List B: 2 -> 3 -> 5 -> 8 -> 9 -> null
 * Result: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> null
 * Questions: are there duplicate numbers in the lists? (assume yes).
 */
var mergeTwoLinkedLists = function(listA, listB) {
  let result = new LinkedList();
  let listAPtr = listA.head;
  let listBPtr = listB.head;

  while (listAPtr !== null && listBPtr !== null) {
    if (listAPtr.value <= listBPtr.value) {
      result.add(listAPtr.value);
      listAPtr = listAPtr.nextNode;
    } else {
      result.add(listBPtr.value);
      listBPtr = listBPtr.nextNode;
    }
  }

  // Add the remaining nodes.
  while (listAPtr !== null) {
    result.add(listAPtr.value);
    listAPtr = listAPtr.nextNode;
  }

  while (listBPtr !== null) {
    result.add(listBPtr.value);
    listBPtr = listBPtr.nextNode;
  }

  return result;
}


exports.Node = Node;
exports.LinkedList = LinkedList;
exports.search = search;
exports.insert = insert;
exports.remove = remove;
exports.mergeTwoLinkedLists = mergeTwoLinkedLists;
