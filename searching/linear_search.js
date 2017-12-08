/** Linear Search
 * Compare target to each element in the list, if there is a match return true.
 * Time complexity: O(n) (worst case)
 * Space complexity: O(1)
 */
var linearSearch = function(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return true;
    }
  }

  return false;
}


exports.linearSearch = linearSearch;
