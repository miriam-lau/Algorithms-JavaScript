/** 12.0 Hash Tables Boot Camp
 * Input: a set of words
 * Output: returns groups of anagrams for those words, each group must contain
 * at least two words.
 * Sort each word, and save as key, then add to map, compare other words to it
 * Time Complexity:
 * Space Complexity:
 */
var findAnagrams = function(words) {
  let wordMap = new Map();
  // Sort each word and check keys: if key does not exist then add it as a key
  // to the map and append word to values, otherwise append word to values.
  for (let i = 0; i < words.length; i++) {
    let sortedWord = words[i].split('').sort().join('');

    if (wordMap.has(sortedWord)) {
      wordMap.get(sortedWord).push(words[i]);
    } else {
      wordMap.set(sortedWord, [words[i]]);
    }
  }

  let result = [];

  // Loop through map and return all values with length > 1.
  wordMap.forEach(function(key) {
    if (key.length > 1) {
      result.push(key);
    }
  });

  return result;
}

/** 12.2 Is an anonymous letter constructible?
 * Input: text for an anonymous letter and text for a magazine
 * Output: determines if it is possible to write the letter from the magazine
 * Questions: case sensitive? punctuation and spaces? (assume yes for case
 * sensitive and punctuation, no for spaces).
 * Time Complexity: O(n), longest text either magazine of letter.
 * Space Complexity: O(m), number of unique letters.
 */
var isLetterConstructible = function(letter, magazine) {
  let charMap = new Map();

  // Add magazine chars to charMap.
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] === ' ') {
      continue;
    }

    let char = magazine[i];

    if (charMap.has(char)) {
      let value = charMap.get(char);
      charMap.set(char, value + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  // Remove letter chars from charMap.
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === ' ') {
      continue;
    }

    let char = letter[i];

    if (charMap.has(char)) {
      let value = charMap.get(char);
      charMap.set(char, value - 1);
    } else {
      charMap.set(char, -1);
    }
  }

  // Check if any values in charMap < 0
  let result = true;
  charMap.forEach(function(key) {
    if (key < 0) {
      result = false;
    }
  });

  return result;
}


exports.findAnagrams = findAnagrams;
exports.isLetterConstructible = isLetterConstructible;
