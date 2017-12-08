var assert = require("chai").assert;
var expect = require("chai").expect;
var linearSearch = require("../linear_search.js").linearSearch;
var binarySearch = require("../binary_search.js");

describe("Searching", function() {
  describe("#linearSearch", function() {
    it("returns true if target is found", function() {
      let list1 = [56, 3, 249, 518, 7, 26, 94, 651, 23, 9];

      assert.equal(linearSearch(list1, 9), true);
    });

    it("returns false it target is not found", function() {
      let list2 = [56, 3, 249, 518, 7, 26, 94, 651, 23, 9];

      assert.equal(linearSearch(list2, 8), false);
    });

    it("returns false if arr is empty", function() {
      let list3 = [];

      assert.equal(linearSearch(list3, 8), false);
    });
  });

  describe("#binarySearchRecursive", function() {
    it("works with the normal case", function() {
      let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      assert.equal(binarySearch.binarySearchRecursive(list1, 3), 2);
      assert.equal(binarySearch.binarySearchRecursive(list1, 9), 8);
    });

    it("returns -1 if target is not found", function() {
      let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      assert.equal(binarySearch.binarySearchRecursive(list2, 11), -1);
    });

    it("returns -1 if arr is empty", function() {
      let list3 = [];

      assert.equal(binarySearch.binarySearchRecursive(list3, 8), -1);
    });
  });

  describe("#binarySearchIterative", function() {
    it("works with the normal case", function() {
      let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      assert.equal(binarySearch.binarySearchIterative(list1, 3), 2);
      assert.equal(binarySearch.binarySearchIterative(list1, 9), 8);
    });

    it("returns -1 if target is not found", function() {
      let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      assert.equal(binarySearch.binarySearchIterative(list2, 11), -1);
    });

    it("returns -1 if arr is empty", function() {
      let list3 = [];

      assert.equal(binarySearch.binarySearchIterative(list3, 8), -1);
    });
  });
});
