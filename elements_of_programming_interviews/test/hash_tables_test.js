var assert = require("chai").assert;
var expect = require("chai").expect;
var hashTables = require("../hash_tables.js");

describe('Hash Tables', function() {
  describe('#findAnagrams', function() {
    it('works with the normal case', function() {
      let words = ["debitcard", "elvis", "silent", "badcredit", "lives",
          "freedom", "listen", "levis", "money"];

      assert.deepEqual(hashTables.findAnagrams(words),
          [ ["debitcard", "badcredit"], ["elvis", "lives", "levis"],
              ["silent", "listen"] ]);
    });

    it('returns [] if no anagrams are found', function() {
      let words = ["debitcard", "elvis", "silent", "freedom", "money"];

      assert.deepEqual(hashTables.findAnagrams(words), []);
    });

    it('works with all words are anagrams of each other', function() {
      let words = ["elvis", "lives", "levis"];

      assert.deepEqual(hashTables.findAnagrams(words),
          [ ["elvis", "lives", "levis"] ]);
    });
  });

  describe('#isLetterConstructible', function() {
    let letter = "Look at me! Look at me! Look at me NOW! It is fun to have" +
        " fun. But you have to know how.";

    it('works with the normal case', function() {
      let magazine1 = "NOt! Wow! Lame is to have fun. But Lame took fun. Lame"
          + " took It. To know It, you have to know hook!";

      assert.equal(hashTables.isLetterConstructible(letter, magazine1), true);
    });

    it('returns true if letter is ""', function() {
      let letter1 = "";
      let magazine1 = "NOt! Wow! Lame is to have fun. But Lame took fun. Lame"
          + " took It. To know It, you have to know hook!";

      assert.equal(hashTables.isLetterConstructible(letter1, magazine1), true);
    });

    it('returns true if letter has more spaces than magazine', function() {
      let letter2 = "Hello, hello, world, world, world!";
      let magazine2 = "Hello,hello, world,world,world!";

      assert.equal(hashTables.isLetterConstructible(letter2, magazine2), true);
    });

    it('returns false if cannot construct letter', function() {
      let magazine3 = "NOt! Wow! Lame is to have fun. But Lame took fun.";

      assert.equal(hashTables.isLetterConstructible(letter, magazine3), false);
    });

    it('returns false if magazine is ""', function() {
      let magazine4 = "";

      assert.equal(hashTables.isLetterConstructible(letter, magazine4), false);
    });

    it('returns false if magazine is empty spaces "   "', function() {
      let magazine5 = "   ";

      assert.equal(hashTables.isLetterConstructible(letter, magazine5), false);
    });

    it('is case sensitive', function() {
      let magazine6 = "not! wow! lame is to have fun. but lame took fun. lame"
          + " took it. to know it, you have to know hook!";

      assert.equal(hashTables.isLetterConstructible(letter, magazine6), false);
    });
  });
});
