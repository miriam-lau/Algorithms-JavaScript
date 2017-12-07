var assert = require("chai").assert;
var expect = require("chai").expect;
var bubbleSort = require("../bubble_sort.js").bubbleSort;
var mergeSort = require("../merge_sort.js").mergeSort;
var quickSort = require("../quick_sort.js").quickSort;

describe("Sorting", function() {
  describe("#bubbleSort", function() {
    it("works with the normal case", function() {
      let arr = [1, 6, 9, 2, 3, 7, 5, 4, 8];
      assert.deepEqual(bubbleSort(arr), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("works with the duplicates", function() {
      let arr = [1, 6, 9, 3, 9, 7, 5, 4, 4, 1];
      assert.deepEqual(bubbleSort(arr), [1, 1, 3, 4, 4, 5, 6, 7, 9, 9]);
    });

    it("returns [] if arr is empty", function() {
      let arr = [];
      assert.deepEqual(bubbleSort(arr), []);
    });

    it("returns arr if arr is length 1", function() {
      let arr = [6];
      assert.deepEqual(bubbleSort(arr), [6]);
    });
  });

  describe("#mergeSort", function() {
    it("works with the normal case", function() {
      let arr = [1, 6, 9, 2, 3, 7, 5, 4, 8];
      assert.deepEqual(mergeSort(arr), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("works with the duplicates", function() {
      let arr = [1, 6, 9, 3, 9, 7, 5, 4, 4, 1];
      assert.deepEqual(mergeSort(arr), [1, 1, 3, 4, 4, 5, 6, 7, 9, 9]);
    });

    it("returns [] if arr is empty", function() {
      let arr = [];
      assert.deepEqual(mergeSort(arr), []);
    });

    it("returns arr if arr is length 1", function() {
      let arr = [6];
      assert.deepEqual(mergeSort(arr), [6]);
    });
  });

  describe("#quickSort", function() {
    it("works with the normal case", function() {
      let arr = [1, 6, 9, 2, 3, 7, 5, 4, 8];
      assert.deepEqual(quickSort(arr), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("works with the duplicates", function() {
      let arr = [1, 6, 9, 3, 9, 7, 5, 4, 4, 1];
      assert.deepEqual(quickSort(arr), [1, 1, 3, 4, 4, 5, 6, 7, 9, 9]);
    });

    it("returns [] if arr is empty", function() {
      let arr = [];
      assert.deepEqual(quickSort(arr), []);
    });

    it("returns arr if arr is length 1", function() {
      let arr = [6];
      assert.deepEqual(quickSort(arr), [6]);
    });
  });
});
