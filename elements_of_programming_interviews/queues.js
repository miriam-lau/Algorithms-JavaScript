/** 8.0 Queues Boot Camp
 * FIFO: first in, first out
 * Implement a Queue with enqueue, dequeue, and max methods.
 * Time Complexity for enqueue and getMax: O(1), dequeue: O(n)
 * Space Complexity: O(n), n is the number of entries in the queue.
 */
class Queue extends Array {
  constructor() {
    super();
    this.values = new Array();
    this.maxNums = new Array();
  }

  // For maxNum: whle num > last entry replace, if <= then add.
  // add 5: queue = [5], max = [5]
  // add 11: q = [5, 11], num > last entry so replace: max = [11]
  // add 2: q = [5, 11, 2], num is <= last entry, so add: m = [11, 2]
  // add 4: q = [5, 11, 2, 4], replace: m = [11, 4]
  // remove: q = [11, 2, 4], m = [11, 4]
  enqueue(num) {
    let lastIndex = this.maxNums.length - 1;

    if (this.maxNums.length === 0 || num <= this.maxNums[lastIndex]) {
      this.maxNums.push(num);
    } else {
      while (this.maxNums[lastIndex - 1] < num && lastIndex > 0) {
        lastIndex--;
      }

      this.maxNums[lastIndex] = num;
      this.maxNums = this.maxNums.splice(0, lastIndex + 1);
    }

    this.values.push(num);
  }

  dequeue() {
    if (this.values.length === 0) {
      return null;
    }

    let deletedNum = this.values[0];
    this.values = this.values.splice(1);

    if (deletedNum === this.maxNums[0]) {
      this.maxNums = this.maxNums.splice(1);
    }

    return deletedNum;
  }

  getMax() {
    if (this.maxNums.length === 0) {
      return null;
    }

    return this.maxNums[0];
  }
}

/** 8.7 Compute binary tree nodes in order of increasing depth
 * Each node in a binary tree has a depth (distance from root).
 * Input: binary tree
 * Output: return an array consisting of the keys at the same level. Keys should
 * appear in the order of the corresponding nodes' depths, breaking ties from
 * left to right.
 * Use preorder traversal: root, left, right; add all current depth nodes to a
 * queue and all their children ot another queue.
 * Example:
 * loop:
 *  currentDepthNodes = [root]
 *  remove a node from currentDepthNodes: node = root, currentDepthNodes = []
 *  add node's children to nextDepthNodes:
 *    nextDepthNodes = [root.left, root.right].
 *  add node's value to currentResult: currentResult = [node.value]
 * if currentDepthNodes is empty:
 *  currentDepthNodes = nextDepthNodes = [root.left, root.right]
 *  nextDepthNodes = []
 *  result.push(currentResult): result = [root.value]
 *  currentResult = [];
 * next iteration of loop:
 *  currentDepthNodes = [root.left, root.right]
 *  node = root.left; now currentDepthNodes = [root.right]
 *  nextDepthNodes = [root.left.left, root.left.right]
 *  currentResult = [root.left.value]
 * currentDepthNodes is not empty, next iteration of loop:
 *  node = root.right; now currentDepthNodes = [];
 *  nextDepthNodes = [root.left.left, root.left.right, root.right.left,
 *    root.right.right]
 *  currentResult = [root.left.value, root.right.value]
 * currentDepthNodes is empty, so:
 *  result.push(currentResult):
 *    result = [ [root.value], [root.left.value, root.right.value] ]
 *  currentResult = []
 *  currentDepthNodes = nextDepthNodes =
 *    [root.left.left, root.left.right, root.right.left, root.right.right]
 *  nextDepthNodes = [];
 */
var computeBinaryTreeNodes = function(tree) {
  let result = [];

  if (tree === null) {
    return result;
  }

  let currentDepthNodes = new Queue();
  currentDepthNodes.enqueue(tree);

  let currentResult = [];
  let nextDepthNodes = new Queue();

  while (currentDepthNodes.values.length !== 0) {
    let node = currentDepthNodes.dequeue();

    if (node.left !== null) {
      nextDepthNodes.enqueue(node.left);
    }

    if (node.right !== null) {
      nextDepthNodes.enqueue(node.right);
    }

    currentResult.push(node.value);

    if (currentDepthNodes.values.length === 0) {
      result.push(currentResult);
      currentResult = [];
      currentDepthNodes = nextDepthNodes;
      nextDepthNodes = new Queue();
    }
  }

  return result;
}


exports.Queue = Queue;
exports.computeBinaryTreeNodes = computeBinaryTreeNodes;
