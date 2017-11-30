/** 5.0 Arrays Boot Camp
 * Input: array of ints
 * Output: reorder its entries so that the even entries appear first
 * Restrictions: cannot use additional space.
 * Questions: negative numbers? 0? empty array? (solution assumes no for both).
 * Time complexity: O(n).
 * Space complexity: O(1).
 */
var arrangeEvenFirst = function(ints) {
  let leftIndex = 0;
  let rightIndex = ints.length - 1;

  while (leftIndex < rightIndex) {
    if (ints[leftIndex] % 2 === 0) {
      leftIndex++;
    } else {
      let temp = ints[leftIndex];
      ints[leftIndex] = ints[rightIndex];
      ints[rightIndex] = temp;
      rightIndex--;
    }
  }

  return ints;
}

/** 5.1 Dutch National Flag
 * Input: array of ints and an index i
 * Output: rearranges elements so that all elements < array[i] appear first,
 * followed by elements = array[i] and then elements > array[i].
 * Restrictions: cannot use additional space.
 * Questions: empty array? (solution assumes no for both).
 * Time complexity: O(n).
 * Space complexity: O(1).
 */
var partitionOnPivot = function(ints, i) {
  let leftIndex = 0;
  let rightIndex = ints.length - 1;
  let pivot = ints[i];

  // Move all elements > pivot are to the right.
  while (leftIndex < rightIndex) {
    if (ints[leftIndex] <= pivot) {
      leftIndex++;
    } else {
      let temp = ints[leftIndex];
      ints[leftIndex] = ints[rightIndex];
      ints[rightIndex] = temp;
      rightIndex--;
    }
  }

  // Now all elements <= pivot are from indices 0 to rightIndex.
  leftIndex = 0;
  while (leftIndex < rightIndex) {
    if (ints[leftIndex] < pivot) {
      leftIndex++;
    } else {
      let temp = ints[leftIndex];
      ints[leftIndex] = ints[rightIndex];
      ints[rightIndex] = temp;
      rightIndex--;
    }
  }

  return ints;
}

/** 5.6 Buy and Sell Stock Once
 * Input: array of stock prices.
 * Output: max profit that could be made by buying and then selling one share
 * of that stock.
 * Time Complexity: O(n).
 * Space Complexity: O(1).
 */
var findMaxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
  }

  return maxProfit;
}


exports.arrangeEvenFirst = arrangeEvenFirst;
exports.partitionOnPivot = partitionOnPivot;
exports.findMaxProfit = findMaxProfit;
