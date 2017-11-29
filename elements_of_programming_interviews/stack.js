const Node = require("./linked_list.js").Node;
const LinkedList = require("./linked_list.js").LinkedList;

/** 8.0 Stack Boot Camp
 * LIFO: last in, first out
 * Implement a function that uses a stack to print the values of a singly
 * linked list in reverse order.
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
var printListinReverse = function(linkedList) {
  if (linkedList.head.nextNode === null) {
    return null;
  }

  var stack = [];

  var currentNode = linkedList.head.nextNode;
  while(currentNode !== null) {
    stack.push(currentNode.value);
    currentNode = currentNode.nextNode;
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    console.log(stack[i]);
  }

  return stack;
}

/** 8.1 Implement a stack with max API
 * Design a stack that includes the functions: max, push and pop. The max method
 * should return the maximum value stored in the stack.
 * Time complexity for getMax, push, pop: O(1).
 * Space complexity: O(n), n is the number of entries in the stack.
 */

class Stack extends Array {
  constructor() {
    super();
    this.values = new Array();
    this.maxNums = new Array();
  }

  getMax() {
    if (this.maxNums.length === 0) {
      return null;
    }

    return this.maxNums[this.maxNums.length - 1];
  }

  add(num) {
    if (this.maxNums.length === 0 ||
        num >= this.maxNums[this.maxNums.length - 1]) {
      this.maxNums.push(num);
    }

    this.values.push(num);
  }

  remove() {
    if (this.values.length === 0) {
      return null;
    }

    let deletedNum = this.values.pop();

    if (deletedNum === this.maxNums[this.maxNums.length - 1]) {
      this.maxNums.pop();
    }

    return deletedNum;
  }
}

exports.printListinReverse = printListinReverse;
exports.Stack = Stack;
