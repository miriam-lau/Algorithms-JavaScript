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
 * height-balanced: for each node in the tree, the difference in the height of
 * its left and right subtrees is at most one.
 * Input: root of a binary tree
 * Output: checks if tree is height-balanced.
 */
var isHeightBalanced = function(root) {
// need to keep track of the current depth?
// check if each subtree is balanced?
  if (root !== null) {
    isHeightBalanced(root.left);
    isHeightBalanced(root.right);
    // return its own height and if each child is balanced
    // return an object with height property and balanced property
  }
}


exports.printInorderTraversal = printInorderTraversal;
exports.printPreorderTraversal = printPreorderTraversal;
exports.printPostorderTraversal = printPostorderTraversal;
exports.isHeightBalanced = isHeightBalanced;
