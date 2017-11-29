/** 6.0 Boot Camp
 * Input: string.
 * Output: boolean - if string is a palindrome.
 * Questions: empty string? one char string? (assume false if empty string, true
 * if string is length 1).
 * Time Complexity: O(n).
 * Space Complexity: O(1).
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

/** 6.2 Base Conversion
 * Input: string in b1, integer b1, integer b2.
 * Output: string representing integer in b2.
 * Info: assume bases range from 2 - 16. Use A, B, C, D, E, F to represent 10,
 * 11, 12, 13, 14, 15
 * Formula to convert to Base10: (num * b1^p) for all indices up to length - 2
 * then add the rightmostDigit.
 * Question: negative numbers? (assume yes).
 * Time Complexity: O(m) or O(n), m is number of iterations in while loop.
 * Space Complexity: O(m), m is the length of the result string.
 */
var convertStrToBase = function(str, b1, b2) {
  if (str.length === 0) {
    return "";
  }

  if (str === "0") {
    return "0";
  }

  let isNeg = false;
  if (str[0] === '-') {
    isNeg = true;
    str = str.slice(1);
  }

  str = str.toUpperCase();
  let charCodeA = "A".charCodeAt(0);

  // Convert number string in b1 to a int in base 10.
  let numInBase10 = null;
  let power = 1;
  let rightIndex = str.length - 1;

  if (str.charCodeAt(rightIndex) >= 65 && str.charCodeAt(rightIndex) <= 70) {
    numInBase10 = str.charCodeAt(rightIndex) - charCodeA + 10;
  } else {
    numInBase10 = parseInt(str[rightIndex]);
  }

  for (let i = str.length - 2; i >= 0; i--) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 70) {
      numInBase10 += (str.charCodeAt(i) - charCodeA + 10) * Math.pow(b1, power);
    } else {
      numInBase10 += parseInt(str[i] * Math.pow(b1, power));
    }

    power += 1;
  }

  if (b2 === 10) {
    return (isNeg ? ("-" + numInBase10) : numInBase10.toString());
  }

  // Convert number to b2 as a string.
  let result = "";

  while (numInBase10 !== 0) {
    if (numInBase10 % b2 > 9) {
      result = String.fromCharCode((numInBase10 % b2) - 10 + charCodeA) + result;
    } else {
      result = numInBase10 % b2 + result;
    }

    numInBase10 = Math.floor(numInBase10 / b2);
  }

  return (isNeg ? ("-" + result) : result);
}

/** 6.4 Replace and Remove
 * Input: an array of chars.
 * Output: removes each 'b' and replaces each 'a' by 2 'd's.
 * Info: given an integer-valued size that denotes the number of entries of the
 * array that the operation is applied to. Can assume enough space in the array
 * to hold final result.
 * [a, b, a, c, _], size = 4, [d, d, d, d, c]
 * Time Complexity: O(n) or O(m), m is the length of result array.
 * Space Complexity: O(m), m is the length of the result array.
 */
var replaceAndRemove = function(chars) {
  // To calculate how much space needed, find the number of 'a's and 'b's.
  let numOfA = 0;
  let numOfB = 0;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === 'a') {
      numOfA++;
    }

    if (chars[i] === 'b') {
      numOfB++;
    }
  }

  let result = new Array((chars.length - numOfA - numOfB) + (numOfA * 2));
  let writeIndex = result.length - 1;

  for (let i = chars.length - 1; i >= 0; i--) {
    if (chars[i] === 'b') {
      continue;
    }

    if (chars[i] === 'a') {
      result[writeIndex] = 'd';
      writeIndex--;
      result[writeIndex] = 'd';
      writeIndex--;
    } else {
      result[writeIndex] = chars[i];
      writeIndex--;
    }
  }

  return result;
}

exports.isPalindrome = isPalindrome;
exports.convertStrToBase = convertStrToBase;
exports.replaceAndRemove = replaceAndRemove;
