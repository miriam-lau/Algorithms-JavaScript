var assert = require("chai").assert;
var expect = require("chai").expect;
var searches = require("../searches.js");
const Student = require("../student_class.js").Student;

describe('Searches', function() {
  describe('#findStudent', function() {
    const A = new Student("Homura", 4.0);
    const B = new Student("James", 4.0);
    const C = new Student("Vivian", 4.0);
    const D = new Student("Miriam", 3.5);
    const E = new Student("Kenzie", 2.0);
    const F = new Student("Kermit", 2.0);
    const G = new Student("Hodor", 0.5);

    let students = [A, B, C, D, E, F, G];

    it('works with the normal case', function() {
      const H = new Student("Miriam", 3.5);

      assert.equal(searches.findStudent(students, G), true);
      assert.equal(searches.findStudent(students, H), true);
    });

    it('works with duplicate GPAs', function() {
      assert.equal(searches.findStudent(students, A), true);
    });

    it('works with duplicate GPAs and names beginning with the same letter',
        function() {
      assert.equal(searches.findStudent(students, F), true);
    });

    it('returns false if a student is not found', function() {
      const I = new Student("Madoka", 1.0);
      const J = new Student("Mami", 3.5);

      assert.equal(searches.findStudent(students, I), false);
      assert.equal(searches.findStudent(students, J), false);
    });

    it('returns false if students array is empty', function() {
      let emptyStudents = [];

      assert.equal(searches.findStudent(emptyStudents, B), false);
    });
  });

  describe('#findFirstOccurrence', function() {
    let arr = [-14, -10, 2, 108, 108, 243, 285, 285, 285, 401];

    it('works with the normal case', function() {
      assert.equal(searches.findFirstOccurrence(arr, 108), 3);
      assert.equal(searches.findFirstOccurrence(arr, 285), 6);
    });

    it('returns -1 if target num is not in the array', function() {
      assert.equal(searches.findFirstOccurrence(arr, 50), -1);
    });

    it('returns -1 if array is empty', function() {
      let emptyArr = [];

      assert.equal(searches.findFirstOccurrence(emptyArr, 50), -1);
    });
  });
});
