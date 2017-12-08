/** 14.0 Binary Search Trees Boot Camp
 * Check if a given value is present in a BST
 * Input: tree, key as an integer
 * Output: boolean
 * Time Complexity: O(logn)
 * Space Complexity: O(logn)
 */
var isTargetInBST = function(root, key) {
  // Base case
  if (root === null) {
    return false;
  }

  if (root.value === key) {
    return true;
  } else if (root.value < key) {
    return isTargetInBST(root.right, key);
  } else {
    return isTargetInBST(root.left, key);
  }

  return false;
}

/** 14.1 Test if a binary tree satisfies the BST property
 * Input: binary tree
 * Output: boolean
 * Time Complexity: O(logn)
 * Space Complexity: O(logn)
 */
var isBinaryTreeABST = function(root) {
  // Base case
  if (root === null) {
    return true;
  }

  if ((root.left !== null && root.left.value > root.value) ||
      (root.right !== null && root.right.value < root.value)) {
    return false;
  }

  // return isBinaryTreeABST(root.left);
  // return isBinaryTreeABST(root.right);
  // If root.left is null, it returns the base case which is true and doesn't
  // evaluate isBinaryTreeABST(root.right), so need to return the result of
  // both instead.
  return (isBinaryTreeABST(root.left) && isBinaryTreeABST(root.right));
}

exports.isTargetInBST = isTargetInBST;
exports.isBinaryTreeABST = isBinaryTreeABST;
