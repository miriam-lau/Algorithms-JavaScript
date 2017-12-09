var assert = require("chai").assert;
var expect = require("chai").expect;
var sinon = require("sinon");
var binaryTree = require("../binary_trees.js");
const BTNode = require("../binary_tree_node_class.js").BinaryTreeNode;

describe('Binary Tree', function() {
  describe('Print Traversals', function() {
    let A = new BTNode(314);
    const B = new BTNode(6);
    const C = new BTNode(271);
    const D = new BTNode(28);
    const E = new BTNode(0);
    const F = new BTNode(561);
    const G = new BTNode(3);
    const H = new BTNode(17);
    const I = new BTNode(6);
    const J = new BTNode(2);
    const K = new BTNode(1);
    const L = new BTNode(401);
    const M = new BTNode(641);
    const N = new BTNode(257);
    const O = new BTNode(271);
    const P = new BTNode(28);

    A.left = B;
    A.right = I;
    B.left = C;
    B.right = F;
    C.left = D;
    C.right = E;
    F.right = G;
    G.left = H;
    I.left = J;
    I.right = O;
    J.right = K;
    K.left = L;
    K.right = N;
    L.right = M;
    O.right = P;

    it('prints inorder', function() {
      let spy = sinon.spy(console, 'log');
      binaryTree.printInorderTraversal(A);

      assert(spy.calledWith(28));
      assert(spy.calledWith(271));
      assert(spy.calledWith(0));
      assert(spy.calledWith(6));
      assert(spy.calledWith(561));
      assert(spy.calledWith(17));
      assert(spy.calledWith(3));
      assert(spy.calledWith(314));
      assert(spy.calledWith(2));
      assert(spy.calledWith(401));
      assert(spy.calledWith(641));
      assert(spy.calledWith(1));
      assert(spy.calledWith(257));
      assert(spy.calledWith(6));
      assert(spy.calledWith(271));
      assert(spy.calledWith(28));
      spy.restore();
    });

    it('prints preorder', function() {
      let spy = sinon.spy(console, 'log');
      binaryTree.printPreorderTraversal(A);

      assert(spy.calledWith(314));
      assert(spy.calledWith(6));
      assert(spy.calledWith(271));
      assert(spy.calledWith(28));
      assert(spy.calledWith(0));
      assert(spy.calledWith(561));
      assert(spy.calledWith(3));
      assert(spy.calledWith(17));
      assert(spy.calledWith(6));
      assert(spy.calledWith(2));
      assert(spy.calledWith(1));
      assert(spy.calledWith(401));
      assert(spy.calledWith(641));
      assert(spy.calledWith(257));
      assert(spy.calledWith(271));
      assert(spy.calledWith(28));
      spy.restore();
    });

    it('prints postorder', function() {
      let spy = sinon.spy(console, 'log');
      binaryTree.printPostorderTraversal(A);

      assert(spy.calledWith(28));
      assert(spy.calledWith(0));
      assert(spy.calledWith(271));
      assert(spy.calledWith(17));
      assert(spy.calledWith(3));
      assert(spy.calledWith(561));
      assert(spy.calledWith(6));
      assert(spy.calledWith(641));
      assert(spy.calledWith(401));
      assert(spy.calledWith(257));
      assert(spy.calledWith(1));
      assert(spy.calledWith(2));
      assert(spy.calledWith(28));
      assert(spy.calledWith(271));
      assert(spy.calledWith(6));
      assert(spy.calledWith(314));
      spy.restore();
    });
  });

  describe('#isHeightBalanced', function() {
    it('returns true if tree is balanced', function() {
      let A = new BTNode(314);
      const B = new BTNode(6);
      const C = new BTNode(271);
      const D = new BTNode(28);
      const E = new BTNode(0);
      const F = new BTNode(561);
      const G = new BTNode(3);
      const H = new BTNode(17);
      const I = new BTNode(6);
      const J = new BTNode(2);
      const K = new BTNode(1);
      const L = new BTNode(401);
      const M = new BTNode(641);
      const N = new BTNode(257);
      const O = new BTNode(271);
      const P = new BTNode(28);

      A.left = B;
      A.right = K;
      B.left = C;
      B.right = H;
      C.left = D;
      C.right = G;
      D.left = E;
      D.right = F;
      H.left = I;
      H.right = J;
      K.left = L;
      K.right = O;
      L.left = M;
      L.right = N;

      assert.equal(binaryTree.isHeightBalanced(A), true);
    });

    it('returns false if tree is not balanced', function() {
      let A = new BTNode(314);
      const B = new BTNode(6);
      const C = new BTNode(271);
      const D = new BTNode(28);
      const E = new BTNode(0);
      const F = new BTNode(561);
      const G = new BTNode(3);
      const H = new BTNode(17);
      const K = new BTNode(1);
      const L = new BTNode(401);
      const M = new BTNode(641);
      const N = new BTNode(257);
      const O = new BTNode(271);
      const P = new BTNode(28);

      A.left = B;
      A.right = K;
      B.left = C;
      B.right = H;
      C.left = D;
      C.right = G;
      D.left = E;
      D.right = F;
      K.left = L;
      K.right = O;
      L.left = M;
      L.right = N;

      assert.equal(binaryTree.isHeightBalanced(A), false);
    });

    it('returns true if tree is empty', function() {
      assert.equal(binaryTree.isHeightBalanced(null), true);
    });
  });
});
