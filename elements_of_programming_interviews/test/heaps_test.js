var assert = require("chai").assert;
var expect = require("chai").expect;
var heaps = require("../heaps.js");

describe('Heaps', function() {
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
});
