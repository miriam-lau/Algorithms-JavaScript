/** 6.0 Boot Camp
 * Input: string
 * Output: boolean - if string is a palindrome
 * Questions: empty string? one char string? (assume false if empty string, true
 * if string is length 1).
 * Time Complexity:
 * Space Complexity:
 */
var isPalindrome = function(str) {
  if (str.length === 0) {
    return false;
  }

  let rightIndex = str.length - 1;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[rightIndex - i]) {
      return false;
    }
  }

  return true;
}

/** 6.1 convert Integer to String
 * Input:
 * Output:
 * Time Complexity:
 * Space Complexity:
 */
var convertIntToStr = function(prices) {

}


/** 6.1 Convert String to Integer
 * Input:
 * Output:
 * Time Complexity:
 * Space Complexity:
 */
var convertStrToInt = function(prices) {

}

exports.isPalindrome = isPalindrome;
