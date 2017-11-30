var assert = require("chai").assert;
var expect = require("chai").expect;
var strings = require("../strings.js");

describe('String', function() {
  describe('#isPalindrome', function() {
    it('works with strings of odd length', function() {
      assert.equal(strings.isPalindrome("aabaa"), true);
    });

    it('works with strings of even length', function() {
      assert.equal(strings.isPalindrome("aabbaa"), true);
    });

    it('returns false if string is not a palindrome', function() {
      assert.equal(strings.isPalindrome("aabbcc"), false);
    });

    it('returns false for an empty string', function() {
      assert.equal(strings.isPalindrome(""), false);
    });

    it('works with string length 1', function() {
      assert.equal(strings.isPalindrome("a"), true);
    });
  });

  describe('#convertStrToBase', function() {
    it('converts one base to another base', function() {
      assert.equal(strings.convertStrToBase("101", 2, 10), "5");
    });

    it('converts a lower base to a higher base', function() {
      assert.equal(strings.convertStrToBase("1100", 2, 6), "20");
    });

    it('converts a higher base to a lower base', function() {
      assert.equal(strings.convertStrToBase("20", 6, 2), "1100");
    });

    it('works with negative numbers', function() {
      assert.equal(strings.convertStrToBase("-1100", 2, 12), "-10");
    });

    it('converts a base >= 11 to a base < 10', function() {
      assert.equal(strings.convertStrToBase("E", 15, 6), "22");
    });

    it('converts a base >= 11 to a base >= 11', function() {
      assert.equal(strings.convertStrToBase("2CA", 13, 16), "1F8");
    });

    it('returns an empty string if string length 0', function() {
      assert.equal(strings.convertStrToBase("", 2, 10), "");
    });

    it('works with 0', function() {
      assert.equal(strings.convertStrToBase("0", 3, 7), "0");
    });

    it('works with 1', function() {
      assert.equal(strings.convertStrToBase("1", 3, 7), "1");
    });

    it('works with lowercase letters', function() {
      assert.equal(strings.convertStrToBase("2ca", 13, 16), "1F8");
    });
  });

  describe('#replaceAndRemove', function() {
    it('works with the normal case', function() {
      assert.deepEqual(
          strings.replaceAndRemove(
              ['a', 'b', 'a', 'c', null]), ['d', 'd', 'd', 'd', 'c']);
    });

    it('returns [] if array is empty', function() {
      assert.deepEqual(strings.replaceAndRemove([]), []);
    });

    it("works with no 'a's", function() {
      assert.deepEqual(
          strings.replaceAndRemove(
              ['b', 'b', 'c', 'c']), ['c', 'c', null, null]);
    });

    it("works with no 'b's", function() {
      assert.deepEqual(
          strings.replaceAndRemove(
              ['a', 'c', 'a', 'c', null, null]), ['d', 'd', 'c', 'd', 'd', 'c']);
    });

    it("works with 'd's in the starting array", function() {
      assert.deepEqual(
          strings.replaceAndRemove(
              ['d', 'e', 'a', 'd', null]), ['d', 'e', 'd', 'd', 'd']);
    });
  });
});
