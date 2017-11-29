var assert = require("chai").assert;
var expect = require("chai").expect;
var arrays = require("../array.js");

describe('Array', function() {
  describe('#arrangeEvenFirst()', function() {
    it('returns even numbers first if present, then odd numbers', function() {
      // Need 'deepEqual' is structural equality does not test if they are the
      // same object, but if they are equivalent; arrays are objects so using
      // 'equal' will test if they are the same object.
      assert.deepEqual(
          arrays.arrangeEvenFirst(
              [1, 10, 3, 5, 12, 7, 8, 6]), [6, 10, 8, 12, 7, 5, 3, 1]);
    });

    it('returns [] if array is empty', function() {
      assert.deepEqual(arrays.arrangeEvenFirst([]), []);
    });

    it('works with all elements are even numbers', function() {
      assert.deepEqual(arrays.arrangeEvenFirst([10, 12, 8, 6]), [10, 12, 8, 6]);
    });

    it('works with all elements are odd numbers', function() {
      assert.deepEqual(arrays.arrangeEvenFirst([3, 5, 7, 9]), [5, 7, 9, 3]);
    });

    it('works with array length 1', function() {
      assert.deepEqual(arrays.arrangeEvenFirst([3]), [3]);
    });
  });

  describe('#partitionOnPivot()', function() {
    it('arranges elements by less than, equal to, then greater than pivot',
        function () {
      assert.deepEqual(
          arrays.partitionOnPivot([1, 3, 5, 3, 1, 5], 3), [1, 1, 3, 3, 5, 5]);
    });

    it('returns [] if array is empty', function() {
      assert.deepEqual(arrays.partitionOnPivot([]), []);
    });

    it('works with array length 1', function() {
      assert.deepEqual(arrays.partitionOnPivot([3], 0), [3]);
    });

    it('arranges elements by less than, then equal to pivot', function() {
      assert.deepEqual(arrays.partitionOnPivot([1, 3, 3, 1], 2), [1, 1, 3, 3]);
    });

    it('arranges elements by equal to, then greater than pivot', function() {
      assert.deepEqual(arrays.partitionOnPivot([5, 3, 3, 5], 2), [3, 3, 5, 5]);
    });

    it('works with all elements equal', function() {
      assert.deepEqual(arrays.partitionOnPivot([3, 3, 3, 3], 2), [3, 3, 3, 3]);
    });

    it('works with pivot as last element', function() {
      assert.deepEqual(arrays.partitionOnPivot([5, 3, 3, 5], 3), [3, 3, 5, 5]);
    });

    it('works with pivot as first element', function() {
      assert.deepEqual(arrays.partitionOnPivot([5, 3, 3, 5], 0), [3, 3, 5, 5]);
    });
  });

  describe('#findMaxProfit()', function() {
    it('works in the normal case', function() {
      assert.equal(
          arrays.findMaxProfit(
              [310, 315, 275, 295, 260, 270, 290, 230, 255, 250]), 30);
    });

    it('returns 0 cannot generate profit', function() {
      assert.equal(arrays.findMaxProfit([310, 275, 260, 230]), 0);
    });

    it('returns 0 if array is empty', function() {
      assert.equal(arrays.findMaxProfit([]), 0);
    });

    it('returns 0 if array length is 1', function() {
      assert.equal(arrays.findMaxProfit([310]), 0);
    });
  });
});
