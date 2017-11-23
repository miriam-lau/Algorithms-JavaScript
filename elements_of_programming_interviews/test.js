var assert = require("assert");
var arrays = require("./arrays.js");
var strings = require("./strings.js");

console.log("ARRAYS", arrays);

describe('Array', function() {
  describe('#arrangeEvenFirst()', function() {
    it('should return even numbers first if present', function() {
      /** need 'deepEqual' is structural equality does not test if they are the
       * same object, but if they are equivalent; arrays are objects so using
       * 'equal' will test if they are the same object.
       */
      assert.deepEqual(arrays.arrangeEvenFirst([1, 2]), [2, 1]);
    });

    it('should return [] if array is empty', function() {
      assert.deepEqual(arrays.arrangeEvenFirst([]), []);
    });
  });

  describe('#partitionOnPivot()', function() {
    it('should arrange elements by less than, equal to, then greater than pivot', function () {
      assert.deepEqual(arrays.partitionOnPivot([1, 3, 5, 3, 1, 5], 3), [1, 1, 3, 3, 5, 5]);
    });

    it('should return [] if array is empty', function() {
      assert.deepEqual(arrays.partitionOnPivot([]), []);
    });

    it('should arrange elements by less than, then equal to pivot', function() {
      assert.deepEqual(arrays.partitionOnPivot([1, 3, 3, 1], 2), [1, 1, 3, 3]);
    });

    it('should arrange elements by equal to, then greater than pivot', function() {
      assert.deepEqual(arrays.partitionOnPivot([5, 3, 3, 5], 2), [3, 3, 5, 5]);
    });
  });

  describe('#findMaxProfit()', function() {
    it('should return the max profit', function() {
      assert.equal(arrays.findMaxProfit([310, 315, 275, 295, 260, 270, 290, 230, 255, 250]), 30);
    });

    it('should return 0 if max profit is less than 0', function() {
      assert.equal(arrays.findMaxProfit([310, 275, 260, 230]), 0);
    });
  });
});

console.log("STRINGS", strings);

describe('String', function() {
  describe('#isPalindrome', function() {
    it('should return true if string of an odd length is a palindrome', function() {
      assert.equal(strings.isPalindrome("aabaa"), true);
    });

    it('should return true if string of an even length is a palindrome', function() {
      assert.equal(strings.isPalindrome("aabbaa"), true);
    });

    it('should return false if string is not a palindrome', function() {
      assert.equal(strings.isPalindrome("aabbcc"), false);
    });

    it('should return false if string is empty', function() {
      assert.equal(strings.isPalindrome(""), false);
    });

    it('should return true if string is of length 1', function() {
      assert.equal(strings.isPalindrome("a"), true);
    });
  });

  describe('#convertIntToStr', function() {
    it('pending')
  });

  describe('#convertStrToInt', function() {
    it('pending')
  });
});
