/** 7.0 Boot Camp
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
    // Empty head node.
    this.head = new Node();
  }

  // linkedList.search(node), called on an instance of the LinkedList class.
  search(node) {
    // head node is a dummy node;
    let currentNode = this.head.nextNode;

    while (currentNode !== null) {
      if (currentNode === node) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  // Insert nodeB after nodeA, LinkedList.insert(nodeA, nodeB).
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

// search(linkedList, node);
var search = function(linkedList, node) {
  // head node is a dummy node;
  let currentNode = linkedList.head.nextNode;

  while (currentNode !== null) {
    if (currentNode === node) {
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
  // head node is a dummy node, so first node in list is head.nextNode.
  let nodeA = listA.head.nextNode;
  let nodeB = listB.head.nextNode;
  let currentNode = result.head;

  while (nodeA !== null && nodeB !== null) {
    let temp = null;

    if (nodeA.value <= nodeB.value) {
      temp = nodeA.nextNode;
      LinkedList.insert(currentNode, nodeA);
      nodeA = temp;
    } else {
      temp = nodeB.nextNode;
      LinkedList.insert(currentNode, nodeB);
      nodeB = temp;
    }

    currentNode = currentNode.nextNode;
  }

  // Add the remaining nodes (nodeA and nodeB can't be null at the same time).
  currentNode.nextNode = (nodeA !== null ? nodeA : nodeB);

  return result;
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.search = search;
exports.insert = insert;
exports.remove = remove;
exports.mergeTwoLinkedLists = mergeTwoLinkedLists;
