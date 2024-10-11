/* 
Given the root of a Binary Search Tree (BST), 
return the minimum absolute difference between the values of any two different nodes in the tree.
*/

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function getMinimumDifference(root) {
    let prev = null;  // To store the value of the previous node in the traversal
    let minDiff = Infinity;  // Initialize the minimum difference with a large number
  
    // Helper function for in-order traversal
    function inorder(node) {
       if (!node) return;
  
      // Traverse the left subtree
      inorder(node.left);
  
      // Process the current node
      if (prev !== null) {
        minDiff = Math.min(minDiff, Math.abs(node.val - prev));  // Calculate the difference with the previous node
      }
      prev = node.val;  // Update the previous node value
  
      // Traverse the right subtree
      inorder(node.right);
    }
  
    // Perform the in-order traversal starting from the root
    inorder(root);
  
    return minDiff;  // Return the minimum absolute difference
  }
  
  // Example usage:
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(6);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  
  console.log(getMinimumDifference(root));  // Output: 1

//     4
//    / \
//    2   6
//   / \
//  1   3

//The absolute differences between consecutive nodes are:
// |2 - 1| = 1
// |3 - 2| = 1
// |4 - 3| = 1
// |6 - 4| = 2