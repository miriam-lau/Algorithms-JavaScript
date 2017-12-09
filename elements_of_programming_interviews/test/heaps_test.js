var assert = require("chai").assert;
var expect = require("chai").expect;
var heaps = require("../heaps.js");
const MinHeap = require("../heaps.js").MinHeap;

describe('Heaps', function() {
  describe("MinHeap class", function() {
    it("inserts a num and sorts", function() {
      let heap = new MinHeap();
      heap.insert(5);

      assert.deepEqual(heap.values, [5]);

      heap.insert(2);
      heap.insert(3);
      heap.insert(1);

      assert.deepEqual(heap.values, [1, 2, 3, 5]);
    })

    it("deletes the minimum num and sorts", function() {
      let heap = new MinHeap();
      heap.insert(5);
      heap.insert(2);
      heap.insert(3);
      heap.insert(1);
      heap.insert(4);
      heap.insert(7);

      // heap = [1, 2, 3, 5, 4, 7]
      heap.remove();

      assert.deepEqual(heap.values, [2, 4, 3, 5, 7]);

      heap.remove();

      assert.deepEqual(heap.values, [3, 4, 7, 5]);
    });

    it("returns the deleted number", function() {
      let heap = new MinHeap();
      heap.insert(5);
      heap.insert(2);
      heap.insert(3);
      heap.insert(1);
      heap.insert(4);
      heap.insert(7);

      // heap = [1, 2, 3, 5, 4, 7]
      assert.equal(heap.remove(), 1);
      assert.equal(heap.remove(), 2);
    });

    it("returns null if heap is empty", function() {
      let heap = new MinHeap();

      assert.equal(heap.remove(), null);
    });
  });

  describe('#getKLongestStrings', function() {
    it('works with the normal case', function() {
      let strings = ["ffffff", "a", "dddd", "bb", "ccc", "eeeee"];
      let result = heaps.getKLongestStrings(strings, 4);

      assert.deepEqual(result, ["ccc", "eeeee", "dddd", "ffffff"]);
    });

    it('returns input if input has < k strings', function() {
      let strings = ["a", "dddd", "bb", "ccc"];
      let result = heaps.getKLongestStrings(strings, 5);

      assert.deepEqual(result, ["a", "dddd", "bb", "ccc"]);
    });

    it('works with duplicate strings of the same length', function() {
      let strings = ["ffffff", "a", "dddd", "bb", "ccc", "eeeee", "dddd"];
      let result = heaps.getKLongestStrings(strings, 5);

      assert.deepEqual(result, ["ccc", "dddd", "dddd", "ffffff", "eeeee"]);
    });

    it('works with empty strings', function() {
      let strings = ["ffffff", "a", "dddd", "bb", "ccc", "eeeee", ""];
      let result = heaps.getKLongestStrings(strings, 5);

      assert.deepEqual(result, ["bb", "ccc", "dddd", "ffffff", "eeeee"]);
    });

    it('returns input if input is empty', function() {
      let strings = [];
      let result = heaps.getKLongestStrings(strings, 5);

      assert.deepEqual(result, []);
    });
  });

  describe('#mergeSortedFiles', function() {
    it('works with the normal case', function() {
      let sequences = [ [3, 5, 7], [0, 4], [2, 6, 28] ];

      assert.deepEqual(
          heaps.mergeSortedFiles(sequences), [0, 2, 3, 4, 5, 6, 7, 28]);
    });

    it('works with duplicates', function() {
      let sequences = [ [3, 5, 7], [0, 6], [0, 6, 28] ];

      assert.deepEqual(
          heaps.mergeSortedFiles(sequences), [0, 0, 3, 5, 6, 6, 7, 28]);
    });

    it('returns [] if input is empty', function() {
      let sequences = [];

      assert.deepEqual(heaps.mergeSortedFiles(sequences), []);
    });
  });
});
