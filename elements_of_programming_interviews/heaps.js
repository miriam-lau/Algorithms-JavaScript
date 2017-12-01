/** 10.0 Heaps Boot Camp
 * Input: sequence of strings in "streaming" fashion (cannot back up to read an
 * earlier value).
 * Output: compute the k longest strings in the sequence, order not important.
 * Need to store strings by length, and if new string is longer than a previous
 * one, need to insert it in the right place.
 * Heap property: the key at each node >= keys stored in its children.
 * Time Complexity:
 * Space Complexity:
 */
var getKLongestStrings = function(strings, k) {
  // Create a minHeap: parent value <= children's values.
  // Formulat to find the children: 2i + 1, 2i + 2
  // Formula to find parent: childIndex - 1 / 2 (if childIndex is odd),
  //  childIndex - 2 / 2 (if childIndex is even)
  let minHeap = [];
  minHeap.push(strings[0]);
  let strIndex = 1;

  while (minHeap.length < k) {
    // Push the string to the end of the minHeap.
    if (strings[strIndex].length < minHeap[0].length) {
      minHeap.push(minHeap[0]);
      minHeap[0] = strings[strIndex];
    } else {
      minHeap.push(strings[strIndex]);
    }

    // Compare last entry in minHeap to parents and sort accordingly.
    let currentIndex = minHeap.length - 1;
    let parentIndex = (currentIndex - ((currentIndex % 2 === 0) ? 2 : 1)) / 2;

    while (minHeap[currentIndex].length < minHeap[parentIndex].length) {
      // Swap current and parent, and reassign indices.
      let temp = minHeap[currentIndex];
      minHeap[currentIndex] = minHeap[parentIndex];
      minHeap[parentIndex] = temp;
      currentIndex = parentIndex;
      parentIndex = (currentIndex - ((currentIndex % 2 === 0) ? 2 : 1)) / 2;

      if (currentIndex === parentIndex) {
        break;
      }
    }
    strIndex++;
  }

  // Heap is now ordered by shortest length at index 0 and has k entries;
  for (let i = strIndex; i < strings.length; i++) {
    if (strings[i].length <= minHeap[0].length) {
      continue;
    }

    // Replace minHeap[0] with strings[i] then compare minHeap[0] with its
    // children and sort if needed.
    minHeap[0] = strings[i];
    let parentIndex = 0;
    let childIndex = (2 * parentIndex) +
        (minHeap[1].length < minHeap[2].length) ? 1 : 2;

    while (minHeap[parentIndex] > minHeap[childIndex]) {
      let temp = minHeap[parentIndex];
      minHeap[parentIndex] = minHeap[childIndex];
      minHeap[childIndex] = temp;
      parentIndex = childIndex;
      childIndex = (2 * parentIndex) + 1;

      if (childIndex > minHeap.length - 1) {
        break;
      }
    }
  }

  return minHeap;
}

/** 10.1 Merge sorted files
 * Input: set of sorted sequences
 * Output: computes the union of these sequences as a sorted sequence.
 * Example: [[3, 5, 7], [0, 6], [0, 6, 28]] returns [0, 0, 3, 5, 6, 6, 7, 28].
 * Time Complexity:
 * Space Complexity:
 */
