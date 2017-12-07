var assert = require("chai").assert;
var expect = require("chai").expect;
var sorts = require("../sorts.js");
const Student = require("../student_class.js").Student;

describe('Sorts', function() {
  describe('#sortByName', function() {
    it('works with the normal case', function() {
      const A = new Student("Kermit", 2.0);
      const B = new Student("Homura", 4.0);
      const C = new Student("Miriam", 3.5);
      const D = new Student("James", 4.0);
      const E = new Student("Madoka", 2.0);
      const F = new Student("Vivian", 4.0);
      let students = [A, B, C, D, E, F];

      assert.deepEqual(sorts.sortByName(students), [B, D, A, E, C, F]);
    });

    it('returns arr if arr is length 1', function() {
      const A = new Student("Kermit", 2.0);
      let students = [A];

      assert.deepEqual(sorts.sortByName(students), [A]);
    });

    it('returns [] if arr is empty', function() {
      let students = [];

      assert.deepEqual(sorts.sortByName(students), []);
    });
  });

  describe('#sortByGPA', function() {
    it('works with the normal case', function() {
      const A = new Student("Kermit", 1.0);
      const B = new Student("Homura", 4.0);
      const C = new Student("Miriam", 3.5);
      const D = new Student("James", 3.8);
      const E = new Student("Madoka", 2.0);
      const F = new Student("Vivian", 3.9);
      let students = [A, B, C, D, E, F];

      assert.deepEqual(sorts.sortByGPA(students), [A, E, C, D, F, B]);
    });

    it('sorts by name for duplicates', function() {
      const A = new Student("Kermit", 2.0);
      const B = new Student("Homura", 4.0);
      const C = new Student("Miriam", 3.5);
      const D = new Student("James", 4.0);
      const E = new Student("Madoka", 2.0);
      const F = new Student("Vivian", 4.0);
      let students = [A, B, C, D, E, F];

      assert.deepEqual(sorts.sortByGPA(students), [A, E, C, B, D, F]);
    });

    it('returns arr if arr is length 1', function() {
      const A = new Student("Kermit", 2.0);
      let students = [A];

      assert.deepEqual(sorts.sortByName(students), [A]);
    });

    it('returns [] if arr is empty', function() {
      let students = [];

      assert.deepEqual(sorts.sortByName(students), []);
    });
  });

  describe('#getDuplicates', function() {
    it('works with the normal case', function() {
      let A = [2, 3, 3, 5, 5, 6, 7, 7, 8, 12];
      let B = [5, 5, 6, 8, 8, 9, 10, 10];

      assert.deepEqual(sorts.getDuplicates(A, B), [5, 6, 8]);
    });

    it('returns [] if there are no duplicates', function() {
      let C = [2, 3, 3, 4, 4, 7, 7, 7, 11, 12];
      let D = [5, 5, 6, 8, 8, 9, 10, 10];

      assert.deepEqual(sorts.getDuplicates(C, D), []);
    });

    it('returns [] if one input is empty', function() {
      let E = [];
      let F = [5, 5, 6, 8, 8, 9, 10, 10];

      assert.deepEqual(sorts.getDuplicates(E, F), []);
    });
  });
});
