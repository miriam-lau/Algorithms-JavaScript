/** Quick Sort
 * A Divide and Conquer algorithm. It picks an element as pivot and partitions
 * the given array around the picked pivot.
 *
 * Solution:
 *  After each loop through the array, move the pivot to its correct position.
 *  Then call quickSort on all elements to the left of pivot index, and on
 *    all elements to the right of the pivot index.
 *  Set the pivot to the last element in the array.
 *  Keep track of the index to insert the pivot (insertPivotIndex).
 *  If elements are smaller than the pivot, move the insertPivotIndex++.
 *  At the end of the loop, swap the last element with the element in
 *    insertPivotIndex to place the pivot in the correct position.
 *
 * Example: the index to the left of the | is the current insertPivotIndex.
 *  arr = [1, 6, 11, 7, 4]
 *  pivot = 4
 *  - loop iteration 1 -
 *    i = 0; insertPivotIndex = 0; arr = [1,| 6, 11, 7, 4]
 *    1 < 4, swap i and insertPivotIndex, insertPivotIndex++.
 *  - loop iteration 2 -
 *    i = 1; insertPivotIndex = 1; arr = [1, 6,| 11, 7, 4]
 *    6 > 4, do nothing;
 *  - loop iteration 3 -
 *    i = 2; insertPivotIndex = 1; arr = [1, 6,| 11, 7, 4]
 *    11 > 4, do nothing
 *  - loop iteration 4 -
 *    i = 3; insertPivotIndex = 1; arr = [1, 6,| 11, 7, 4]
 *    7 > 4, do nothing
 *  - loop ends as i === lastIndex -
 *  swap pivot with element at insertPivotIndex; arr = [1, 4, 11, 7, 6]
 *  call quickSort on [1] and [11, 7, 6].
 *
 * Time complexity: O(n*logn) (best), O(n^2) (worst)
 * Space complexity: O(1)
 */
var quickSort = function(arr, leftIndex = null, rightIndex = null) {
  if (leftIndex === null) {
    leftIndex = 0;
  }

  if (rightIndex === null) {
    rightIndex = arr.length - 1;
  }

  // Base case
  if (leftIndex === rightIndex) {
    return arr;
  }

  if (leftIndex < rightIndex) {
    let pivot = arr[rightIndex];
    let insertPivotIndex = leftIndex;

    // Loop through arr up to index before rightIndex because element at
    // rightIndex is the pivot.
    for (let i = leftIndex; i < rightIndex; i++) {
      if (arr[i] < pivot) {
        let temp = arr[i];
        arr[i] = arr[insertPivotIndex];
        arr[insertPivotIndex] = temp;
        insertPivotIndex++;
      }
    }

    // Move pivot to the correct index.
    let temp = arr[insertPivotIndex];
    arr[insertPivotIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    // Call quickSort on all the elements to the left of the pivot, and on all
    // the elements to the right of the pivot.
    quickSort(arr, leftIndex, insertPivotIndex - 1);
    quickSort(arr, insertPivotIndex + 1, rightIndex);
  }

  return arr;
}


exports.quickSort = quickSort;
