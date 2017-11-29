var assert = require("chai").assert;
var expect = require("chai").expect;
var stack = require("../stack.js");
const Node = require("../linked_list.js").Node;
const LinkedList = require("../linked_list.js").LinkedList;
const Stack = require("../stack.js").Stack;

describe('Stack', function() {
  describe('#printListinReverse', function() {
    const nodeD = new Node(4, null);
    const nodeC = new Node(3, nodeD);
    const nodeB = new Node(2, nodeC);
    const nodeA = new Node(1, nodeB);

    let list = new LinkedList();
    list.head.nextNode = nodeA;

    it('works for the normal case', function() {
      assert.deepEqual(stack.printListinReverse(list), [1, 2, 3, 4]);
    });

    it('returns null if list is empty', function() {
      list.head.nextNode = null;
      assert.deepEqual(stack.printListinReverse(list), null);
    });
  });

  describe('Stack Class', function() {
    describe('#add', function() {
      let stack = new Stack();
      stack.values.push(1);
      stack.values.push(2);
      stack.values.push(7);
      stack.values.push(4);

      it('adds a number to the stack', function() {
        stack.add(8);
        assert.equal(stack.values[stack.values.length - 1], 8);
      });
    });

    describe('#remove', function() {
      let stack = new Stack();
      stack.values.push(1);
      stack.values.push(2);
      stack.values.push(7);
      stack.values.push(4);

      let deletedNum = stack.remove();

      it('removes the last entry', function() {
        assert.deepEqual(stack.values, [1, 2, 7]);
      });

      it('returns the deleted number', function() {
        assert.equal(deletedNum, 4);
      });

      it('returns null if stack is empty', function() {
        stack.values = [];
        assert.equal(stack.remove(), null);
      });
    });

    describe('#getMax', function() {
      let stack = new Stack();
      stack.add(1);
      stack.add(2);
      stack.add(7);
      stack.add(4);

      it('works with the normal case', function() {
        assert.equal(stack.getMax(), 7);
      });

      it('returns the next highest max if max is removed',
          function() {
        stack.remove();
        stack.remove();
        assert.equal(stack.getMax(), 2);
      });

      it('works for duplicate max values', function() {
        stack.add(10);
        stack.add(8);
        stack.add(10);
        // stack.values = [1, 2, 10, 8, 10], stack.maxNums = [1, 2, 10, 10]
        assert.equal(stack.getMax(), 10);

        stack.remove();
        //stack.values = [1, 2, 10, 8], stack.maxNums = [1, 2, 10]
        assert.equal(stack.getMax(), 10);
      })

      it('returns null if stack is empty', function() {
        stack.remove();
        stack.remove();
        stack.remove();
        stack.remove();
        assert.deepEqual(stack.getMax(), null);
      });
    });
  });
});
