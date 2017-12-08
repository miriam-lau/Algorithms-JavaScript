/** Bubble Sort
 * Repeatedly swaps the adjacent elements if they are in the wrong order.
 * At the end of each loop through the entire array, the element in the last
 *  last position will be correct, so for the subsequent loop through the entire
 *  array only need to check up to the element before the previous last element.
 * Time complexity: O(n^2) (worst case)
 * Space complexity: O(1)
 */
var bubbleSort = function(arr) {
  let isSwapped = true;
  let iterations = arr.length;

  while (iterations > 0) {
    if (!isSwapped) {
      break;
    }

    isSwapped = false;

    for (let i = 0; i < iterations; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }

    iterations--;
  }

  return arr;
}

exports.bubbleSort = bubbleSort;
