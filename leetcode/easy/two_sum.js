/** Two Sum
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target. You may assume that each input would have
 * exactly one solution, and you may not use the same element twice.
 *
 * Solution: Create a map of the numbers array, setting the key as the number
 * and the value as the index. Then loop through the aray and check if the
 * remainder is a key.
 *
 * Example:
 *  Given nums = [2, 7, 11, 15], target = 9,
 *  Because nums[0] + nums[1] = 2 + 7 = 9,
 *  return [0, 1].
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
var twoSum = function(numbers) {
  let numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    numMap.set(numbers[i], i);
  }

  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let remainder = target - numbers[i];
    if (numMap.has(remainder) {
      result.push(i, numMap.get(remainder));
      break;
    }
  }

  return result;
}
