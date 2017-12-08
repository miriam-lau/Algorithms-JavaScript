/** Binary Search
 * Requirement: is a sorted array.
 * Search the array by dividing the search interval in half.
 * Output: return the index of the target
 */

/** Recursive
 * Time complexity: O(logn)
 * Space complexity: O(logn)
 */
var binarySearchRecursive = function(arr, target) {
  if (arr.length < 1) {
    return -1;
  }

  let middleIndex = Math.floor(arr.length / 2);

  if (arr[middleIndex] === target) {
    return middleIndex;
  } else if (arr[middleIndex] > target) {
    return binarySearchRecursive(arr.slice(0, middleIndex), target);
  } else {
    let result = binarySearchRecursive(arr.slice(middleIndex + 1), target);
    return (result === -1 ? -1 : (result + middleIndex + 1));
  }

  return -1;
}

/** Iterative
 * Time complexity: O(logn)
 * Space complexity: O(1)
 */
var binarySearchIterative = function(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let middleIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;

    if (arr[middleIndex] === target) {
      return middleIndex;
    } else if (arr[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}


exports.binarySearchRecursive = binarySearchRecursive;
exports.binarySearchIterative = binarySearchIterative;
