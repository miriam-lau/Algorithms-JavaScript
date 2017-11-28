var assert = require("chai").assert;
var expect = require("chai").expect;
var linkedLists = require("../linked_lists.js");
const Node = require("../linked_lists.js").Node;
const LinkedList = require("../linked_lists.js").LinkedList;

describe('Node', function() {
  it('creates a node with value and nextNode set to null if no parameters are'
      + ' passed in', function() {
    const node = new Node();

    assert.equal(node.value, null);
    assert.equal(node.nextNode, null);
  });

  it('creates a node and sets the value and nextNode', function() {
    const nodeB = new Node(2, null);
    const nodeA = new Node(1, nodeB);

    assert.equal(nodeA.nextNode, nodeB);
    assert.equal(nodeA.value, 1);
  });
});

describe('Linked List', function() {
  describe('search', function() {
    const nodeE = new Node(5, null);
    const nodeD = new Node(4, null);
    const nodeC = new Node(3, nodeD);
    const nodeB = new Node(2, nodeC);
    const nodeA = new Node(1, nodeB);
    const list = new LinkedList();

    list.head.nextNode = nodeA;

    it('finds a node in the list', function() {
      assert.equal(list.search(nodeC), true);
    });

    it('returns false if node is not found', function() {
      assert.equal(list.search(nodeE), false);
    });
  });

  describe('insert', function() {
    const nodeE = new Node(5, null);
    const nodeD = new Node(4, null);
    const nodeC = new Node(3, nodeD);
    const nodeB = new Node(2, nodeC);
    const nodeA = new Node(1, nodeB);
    const list = new LinkedList();

    list.head.nextNode = nodeA;
    LinkedList.insert(nodeD, nodeE);

    it('inserts a node after another node', function() {
      assert.equal(list.search(nodeE), true);
      assert.equal(nodeD.nextNode, nodeE);
    });
  });

  describe('delete', function() {
    const nodeD = new Node(4, null);
    const nodeC = new Node(3, nodeD);
    const nodeB = new Node(2, nodeC);
    const nodeA = new Node(1, nodeB);
    const list = new LinkedList();

    list.head.nextNode = nodeA;
    const deletedNode = LinkedList.remove(nodeB);

    it('deletes the node after the node passed in', function() {
      assert.equal(list.search(nodeC), false);
    });

    it('returns the deleted node', function() {
      assert.equal(deletedNode, nodeC);
    });

    it('assigns the next node correctly to the node passed in', function() {
      assert.equal(nodeB.nextNode, nodeD);
    });
  });
});

describe('search', function() {
  const nodeE = new Node(5, null);
  const nodeD = new Node(4, null);
  const nodeC = new Node(3, nodeD);
  const nodeB = new Node(2, nodeC);
  const nodeA = new Node(1, nodeB);
  const list = new LinkedList();

  list.head.nextNode = nodeA;

  it('finds a node in the list', function() {
    assert.equal(linkedLists.search(list, nodeC), true);
  });

  it('returns false if node is not found', function() {
    assert.equal(linkedLists.search(list, nodeE), false);
  });
});

describe('insert', function() {
  const nodeE = new Node(5, null);
  const nodeD = new Node(4, null);
  const nodeC = new Node(3, nodeD);
  const nodeB = new Node(2, nodeC);
  const nodeA = new Node(1, nodeB);
  const list = new LinkedList();

  list.head.nextNode = nodeA;
  linkedLists.insert(nodeD, nodeE);

  it('inserts a node after another node', function() {
    assert.equal(linkedLists.search(list, nodeE), true);
    assert.equal(nodeD.nextNode, nodeE);
  });
});

describe('delete', function() {
  const nodeD = new Node(4, null);
  const nodeC = new Node(3, nodeD);
  const nodeB = new Node(2, nodeC);
  const nodeA = new Node(1, nodeB);
  const list = new LinkedList();

  list.head.nextNode = nodeA;
  const deletedNode = linkedLists.remove(nodeB);

  it('deletes the node after the node passed in', function() {
    assert.equal(linkedLists.search(list, nodeC), false);
  });

  it('returns the deleted node', function() {
    assert.equal(deletedNode, nodeC);
  });

  it('assigns the next node correctly to the node passed in', function() {
    assert.equal(nodeB.nextNode, nodeD);
  });
});

describe('mergeTwoLinkedLists', function() {
  let list1;
  let list2;
  let nodeB;

  beforeEach(function() {
    const nodeD = new Node(7, null);
    const nodeC = new Node(6, nodeD);
    nodeB = new Node(3, nodeC);
    const nodeA = new Node(1, nodeB);

    const nodeH = new Node(8, null);
    const nodeG = new Node(5, nodeH);
    const nodeF = new Node(4, nodeG);
    const nodeE = new Node(2, nodeF);

    list1 = new LinkedList();
    list2 = new LinkedList();

    list1.head.nextNode = nodeA;
    list2.head.nextNode = nodeE;
  });

  it('works for the normal case', function() {
    let mergedList = linkedLists.mergeTwoLinkedLists(list1, list2);
    let currentNode = mergedList.head.nextNode;
    let number = 1;

    while (currentNode !== null) {
      assert.equal(currentNode.value, number);
      currentNode = currentNode.nextNode;
      number++;
    }
  });

  it('works if each list has a node with the same number', function() {
    const nodeI = new Node(4, null);
    linkedLists.insert(nodeB, nodeI);


    let mergedList = linkedLists.mergeTwoLinkedLists(list1, list2);
    let currentNode = mergedList.head.nextNode;
    let value = [1, 2, 3, 4, 4, 5, 6, 7, 8];
    let index = 0;

    while (currentNode !== null) {
      assert.equal(currentNode.value, value[index]);
      currentNode = currentNode.nextNode;
      index++;
    }
  });

  it('works if one list is empty', function() {
    list1.head.nextNode = null;
    let mergedList = linkedLists.mergeTwoLinkedLists(list1, list2);
    let currentNode = mergedList.head.nextNode;
    let value = [2, 4, 5, 8];
    let index = 0;

    while (currentNode !== null) {
      assert.equal(currentNode.value, value[index]);
      currentNode = currentNode.nextNode;
      index++;
    }
  });
});
