/** Merge Sort
 * Is a Divide and Conquer algorithm. It divides input array in two halves,
 * calls itself for the two halves and then merges the two sorted halves.
 * Create a helper function, merger() to merge the two halves.
 *
 * Solution:
 *  Split the array into two halves and pass to the merger() function.
 *  merger() function will sort the two halves and return a result.
 *
 * Example:
 *  arr = [6, 1, 11, 7, 4]
 *  middleIndex = 5 / 2 = 2.5 = 2 (rounded down)
 *  call mergeSort on left: [6, 1]
 *    middleIndex = 2 / 2 = 1
 *    call on left mergeSort([6]), is base case, so returns [6]
 *    call on right mergeSort([1]), is base case, so returns [1]
 *    merger([6], [1]), returns [1, 6]
 *  call mergeSort on right: [11, 7, 4]
 *    middleIndex = 3 / 2 = 1.5 = 1 (rounded down)
 *    call on left mergeSort([11]), is base case, so returns [11]
 *    call on right mergeSort([7, 4])
 *      middleIndex = 2 / 2 = 1
 *      call on left mergeSort([7]), is base case, so returns [7]
 *      call on right mergeSort([4]), is base case, so returns [4]
 *      merger([7], [4]), returns [4, 7]
 *    merger([11], [4, 7]), returns [4, 7, 11]
 *  merger([1, 6], [4, 7, 11]), returns [1, 4, 6, 7, 11]
 */
var mergeSort = function(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);
  
  // Call mergeSort on both halves and pass their return values to merger().
  let left = mergeSort(arr.slice(0, middleIndex));
  let right = mergeSort(arr.slice(middleIndex));

  return merger(left, right);
}


var merger = function(left, right){
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}


exports.mergeSort = mergeSort;
