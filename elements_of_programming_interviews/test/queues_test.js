var assert = require("chai").assert;
var expect = require("chai").expect;
var queue = require("../queues.js");
const Queue = require("../queues.js").Queue;
const BTNode = require("../binary_tree_node_class.js").BinaryTreeNode;

describe('Queue', function() {
  describe('Queue Class', function() {
    describe('#enqueue', function() {
      let queue = new Queue();
      queue.values.push(5);
      queue.values.push(1);
      queue.values.push(11);
      queue.values.push(3);

      it('adds to end of queue', function() {
        queue.enqueue(7);
        assert.equal(queue.values[queue.values.length - 1], 7);
      });
    });

    describe('#dequeue', function() {
      let queue = new Queue();
      queue.values.push(5);
      queue.values.push(1);
      queue.values.push(11);
      queue.values.push(3);

      let deletedNum = queue.dequeue();

      it('removes from the front', function() {
        assert.deepEqual(queue.values, [1, 11, 3]);
      });

      it('returns the deleted number', function() {
        assert.equal(deletedNum, 5);
      });

      it('returns null if queue is empty', function() {
        queue.values = [];
        assert.equal(queue.dequeue(), null);
      });
    });

    describe('#getMax', function() {
      let queue;

      beforeEach(function() {
        queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(5);
        queue.enqueue(3);
        queue.enqueue(6);
      });

      it('works with normal case', function() {
        assert.equal(queue.getMax(), 6);
      });

      it('returns next highest max if max is removed', function() {
        queue.dequeue();
        queue.dequeue();
        assert.equal(queue.getMax(), 6);
      });

      it('works for duplicate max values', function() {
        queue.dequeue();
        queue.dequeue();
        // queue.values = [3, 6], queue.maxNums = [6]
        queue.enqueue(10);
        queue.enqueue(8);
        queue.enqueue(10);
        // queue.values = [3, 6, 10, 8, 10], queue.maxNums = [10, 10]
        assert.equal(queue.getMax(), 10);

        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        // queue.values = [8, 10], queue.maxNums = [10]
        assert.equal(queue.getMax(), 10);
      });

      it('returns null if queue is empty', function() {
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        assert.equal(queue.getMax(), null);
      });
    });
  });

  describe('#computeBinaryTreeNodes', function() {
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

    it('work with the normal case', function() {
      assert.deepEqual(queue.computeBinaryTreeNodes(A),
          [ [314], [6, 6], [271, 561, 2, 271], [28, 0, 3, 1, 28], [17, 401, 257],
              [641] ]);
    });

    it('works with a tree with no right node at root', function() {
      A.right = null;
      assert.deepEqual(queue.computeBinaryTreeNodes(A),
          [ [314], [6], [271, 561], [28, 0, 3], [17] ]);
    });

    it('works with a tree with no left node at root', function() {
      A.right = I;
      A.left = null;
      assert.deepEqual(queue.computeBinaryTreeNodes(A),
          [ [314], [6], [2, 271], [1, 28], [401, 257], [641] ]);
    });

    it('returns [] if tree is empty', function() {
      A = null;
      assert.deepEqual(queue.computeBinaryTreeNodes(A), []);
    });
  });
});
