var assert = require("chai").assert;
var expect = require("chai").expect;
var BST = require("../binary_search_trees.js");
const BTNode = require("../binary_tree_node_class.js").BinaryTreeNode;

describe("Binary Search Trees", function() {
  describe("#isTargetInBST", function() {
    const P = new BTNode(53);
    const O = new BTNode(47, null, P);
    const N = new BTNode(41);
    const M = new BTNode(31);
    const L = new BTNode(29, null, M);
    const K = new BTNode(37, L, N);
    const J = new BTNode(23, null, K);
    const I = new BTNode(43, J, O);
    const H = new BTNode(13);
    const G = new BTNode(17, H);
    const F = new BTNode(11, null, G);
    const E = new BTNode(5);
    const D = new BTNode(2);
    const C = new BTNode(3, D, E);
    const B = new BTNode(7, C, F);
    const A = new BTNode(19, B, I);

    it("finds a node", function() {
      assert.equal(BST.isTargetInBST(A, 37), true);
    });

    it("returns false if node is not found", function() {
      assert.equal(BST.isTargetInBST(A, 15), false);
    });

    it("returns false if tree is empty", function() {
      assert.equal(BST.isTargetInBST(null, 15), false);
    });
  });

  describe("#isBinaryTreeABST", function() {
    it("returns true if binary tree is a BST", function() {
      const P = new BTNode(53);
      const O = new BTNode(47, null, P);
      const N = new BTNode(41);
      const M = new BTNode(31);
      const L = new BTNode(29, null, M);
      const K = new BTNode(37, L, N);
      const J = new BTNode(23, null, K);
      const I = new BTNode(43, J, O);
      const H = new BTNode(13);
      const G = new BTNode(17, H);
      const F = new BTNode(11, null, G);
      const E = new BTNode(5);
      const D = new BTNode(2);
      const C = new BTNode(3, D, E);
      const B = new BTNode(7, C, F);
      const A = new BTNode(19, B, I);

      assert.equal(BST.isBinaryTreeABST(A), true);
    });

    it("returns false if binary tree is not a BST", function() {
      const P = new BTNode(53);
      const O = new BTNode(47, null, P);
      const N = new BTNode(41);
      const M = new BTNode(31);
      const L = new BTNode(29, null, M);
      const K = new BTNode(37, L, N);
      const J = new BTNode(23, null, K);
      const I = new BTNode(43, J, O);
      const H = new BTNode(18);
      const G = new BTNode(17, H);
      const F = new BTNode(11, null, G);
      const E = new BTNode(5);
      const D = new BTNode(2);
      const C = new BTNode(3, D, E);
      const B = new BTNode(7, C, F);
      const A = new BTNode(19, B, I);

      assert.equal(BST.isBinaryTreeABST(A), false);
    });

    it("returns false if tree is empty", function() {
      assert.equal(BST.isBinaryTreeABST(null), true);
    });
  });
});
