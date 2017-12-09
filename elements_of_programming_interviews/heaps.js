/** Min Heap
 * Heap property: the key at each node >= keys stored in its children.
 * Formula to find the children: 2i + 1, 2i + 2
 * Formula to find parent: childIndex - 1 / 2 (if childIndex is odd),
 *  childIndex - 2 / 2 (if childIndex is even)
 */
class MinHeap extends Array {
  constructor() {
    super();
    this.values = [];
  }

  // Append to the end.
  // Compare last node with parent and swap until last is in correct position.
  insert(num) {
    this.values.push(num);

    // Sort by comparing child to parent.
    let childIndex = this.values.length - 1;
    let parentIndex;

    if (childIndex === 0) {
      parentIndex = 0;
    } else {
      parentIndex = (childIndex - (childIndex % 2 === 0 ? 2 : 1)) / 2;
    }

    while (parentIndex >= 0 &&
          this.values[childIndex] < this.values[parentIndex]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = temp;

      childIndex = parentIndex;
      parentIndex = (childIndex - (childIndex % 2 === 0 ? 2 : 1)) / 2;
    }
  }

  // Swap top node with last node, then remove last node.
  // Compare top node with children and swap until top is in correct position.
  remove() {
    if (this.values.length === 0) {
      return null;
    }

    let deletedNum = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    // Sort by comparing parent to children.
    let parentIndex = 0;
    let oddChild = (2 * parentIndex + 1);
    let evenChild = (2 * parentIndex + 2);
    let childIndex;

    if (oddChild === this.values.length - 1) {
      childIndex = oddChild;
    } else {
      childIndex = (this.values[oddChild] < this.values[evenChild] ?
          oddChild : evenChild);
    }

    while (parentIndex < this.values.length &&
        this.values[parentIndex] > this.values[childIndex]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = temp;

      parentIndex = childIndex;
      oddChild = (2 * parentIndex + 1);
      evenChild = (2 * parentIndex + 2);

      // Need to check if oddChild is the last index of array before comparison
      // to evenChild.
      if (oddChild === this.values.length - 1) {
        childIndex = oddChild;
      } else {
        childIndex = (this.values[oddChild] < this.values[evenChild] ?
          oddChild : evenChild);
      }
    }

    return deletedNum;
  }
}

/** 10.0 Heaps Boot Camp
 * Input: sequence of strings in "streaming" fashion (cannot back up to read an
 *  earlier value).
 * Output: compute the k longest strings in the sequence, order not important.
 * Need to store strings by length, and if new string is longer than a previous
 * one, need to insert it in the right place.
 * Create a minHeap: parent value <= children's values.
 * Time Complexity:
 * Space Complexity:
 */
var getKLongestStrings = function(strings, k) {
  if (strings.length < k) {
    return strings;
  }

  let minHeap = [];
  let index = 0;

  // Add strings to minHeap as long as minHeap.length < k
  while (minHeap.length < k) {
    minHeap.push(strings[index]);

    let childIndex = minHeap.length - 1;
    let parentIndex;

    if (childIndex === 0) {
      parentIndex = 0;
    } else {
      parentIndex = (childIndex - (childIndex % 2 === 0 ? 2 : 1)) / 2;
    }

    while (parentIndex >= 0 &&
          minHeap[childIndex] < minHeap[parentIndex]) {
      let temp = minHeap[parentIndex];
      minHeap[parentIndex] = minHeap[childIndex];
      minHeap[childIndex] = temp;

      childIndex = parentIndex;
      parentIndex = (childIndex - (childIndex % 2 === 0 ? 2 : 1)) / 2;
    }

    index++;
  }

  // Heap is now ordered by shortest length at index 0 and has k entries;
  for (let i = index; i < strings.length; i++) {
    // Only add strings that are longer than minHeap[0].
    if (strings[i].length <= minHeap[0].length) {
      continue;
    }

    minHeap.push(strings[i]);
    minHeap[0] = minHeap[minHeap.length - 1];
    minHeap.pop();

    // Sort by comparing parent to children.
    let parentIndex = 0;
    let oddChild = (2 * parentIndex + 1);
    let evenChild = (2 * parentIndex + 2);
    let childIndex;

    if (oddChild === minHeap.length - 1) {
      childIndex = oddChild;
    } else {
      childIndex = (minHeap[oddChild] < minHeap[evenChild] ?
          oddChild : evenChild);
    }

    while (parentIndex < minHeap.length &&
        minHeap[parentIndex] > minHeap[childIndex]) {
      let temp = minHeap[parentIndex];
      minHeap[parentIndex] = minHeap[childIndex];
      minHeap[childIndex] = temp;

      parentIndex = childIndex;
      oddChild = (2 * parentIndex + 1);
      evenChild = (2 * parentIndex + 2);

      // Need to check if oddChild is the last index of array before comparison
      // to evenChild.
      if (oddChild === minHeap.length - 1) {
        childIndex = oddChild;
      } else {
        childIndex = (minHeap[oddChild] < minHeap[evenChild] ?
            oddChild : evenChild);
      }
    }
  }

  return minHeap;
}

/** 10.1 Merge sorted files
 * Input: set of sorted sequences
 * Output: computes the union of these sequences as a sorted sequence.
 *
 * Solution:
 *  Since sequences are sorted, add the num at index 0 from each sequence,
 *  sort, then add the lowest num to the result. Then continue with each index.
 *  Deleting an element, swap with last child, remove, then sort.
 *
 * Example: [[3, 5, 7], [0, 6], [0, 6, 28]] returns [0, 0, 3, 5, 6, 6, 7, 28].
 * Time Complexity:
 * Space Complexity:
 */
var mergeSortedFiles = function(sequences) {
  // Find the number of elements in sequences.
  let numElements = 0;
  for (let i = 0; i < sequences.length; i++) {
    numElements += sequences[i].length;
  }

  let minHeap = new MinHeap();
  let result = [];
  let index = 0;

  while (result.length != numElements) {
    for (let i = 0; i < sequences.length; i++) {
      // Skip sequence if sequence is empty.
      if (index >= sequences[i].length) {
        continue;
      }

      minHeap.insert(sequences[i][index]);
    }

    // Add the current lowest num to result.
    result.push(minHeap.remove());
    index++;
  }

  return result;
}


exports.MinHeap = MinHeap;
exports.getKLongestStrings = getKLongestStrings;
exports.mergeSortedFiles = mergeSortedFiles;
