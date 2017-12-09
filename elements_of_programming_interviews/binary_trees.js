/** 9.0 Binary Trees Boot Camp
 * Implement three traversals: inorder, preorder and postorder.
 * Inorder: left, root, right
 * Preorder: root, left, right
 * Postorder: left, right, root
 */
var printInorderTraversal = function(root) {
  if (root !== null) {
    printInorderTraversal(root.left);
    console.log(root.value);
    printInorderTraversal(root.right);
  }
}

var printPreorderTraversal = function(root) {
  if (root !== null) {
    console.log(root.value);
    printPreorderTraversal(root.left);
    printPreorderTraversal(root.right);
  }
}

var printPostorderTraversal = function(root) {
  if (root !== null) {
    printPostorderTraversal(root.left);
    printPostorderTraversal(root.right);
    console.log(root.value);
  }
}

/** 9.1 Test if a binary tree is height-balanced
 * Height-balanced: for each node in the tree, the difference in the height of
 * its left and right subtrees is at most one.
 * Input: root of a binary tree
 * Output: checks if tree is height-balanced.
 *
 * Solution: Need to know whether a subtree is height-balanced and if yes the
 *  height. Return its own height and if each child is balanced return an object
 *  with height property and balanced property.
 *
 * Time complexity: O(n), need to traverse all nodes
 * Space complexity: O(log n) depth of tree?
 */
var isHeightBalanced = function(root) {
  return getBalancedAndHeight(root).balanced;
}

var getBalancedAndHeight = function(root) {
  if (root === null) {
    return { balanced: true, height: -1 };
  }

  let left = getBalancedAndHeight(root.left);

  if (!left.balanced) {
    return left;
  }

  let right = getBalancedAndHeight(root.right);

  if (!right.balanced) {
    return right;
  }

  // Check if left and right subtrees are balanced: it is balanced if the
  // difference in height between the left and right is < 2.
  let isBalanced = Math.abs(left.height - right.height) < 2;
  // The height to return is the maximum height of the children (left and right
  // subtrees) + 1 (add height of current node).
  let height = Math.max(left.height, right.height) + 1;
  return { balanced: isBalanced, height: height };
}


exports.printInorderTraversal = printInorderTraversal;
exports.printPreorderTraversal = printPreorderTraversal;
exports.printPostorderTraversal = printPostorderTraversal;
exports.isHeightBalanced = isHeightBalanced;
