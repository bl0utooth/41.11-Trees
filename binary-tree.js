/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    return this._minDepthHelper(this.root);
  }
  _minDepthHelper(node) {
    if (node === null) {
      return 0;
    }
    if (node.left === null && node.right === null) {
      return 1;
    }
    if (node.left === null) {
      return 1 + this._minDepthHelper(node.right)
    }
    if (node.right === null) {
      return 1 + this._minDepthHelper(node.left);
    }
    return 1 + Math.min(this._minDepthHelper(node.left), this._minDepthHelper(node.right))
  }


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    return this._maxDepthHelper(this.root);
  }
  _maxDepthHelper(node) {
    if (node === null) {
      return 0;
    }

    const leftDepth = this._maxDepthHelper(node.left);
    const rightDepth = this._maxDepthHelper(node.right);
    return 1 + Math.max(leftDepth, rightDepth)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSumResult = { maxSum: -Infinty }
    this._maxSumHelper(this.root, maxSumResult)
      return maxSumResult.maxSum; 
  }

    _maxSumHelper(node, maxSumResult) {
      if (node === null) {
        return 0;
      }

      let leftMax = Math.max(0, this._maxSumHelper(node.left, maxSumResult))
      let rightMax = Math.max(0, this._maxSumHelper(node.right, maxSumResult))
  
      let currentMax = node.value + leftMax + rightMax;
  
      maxSumResult.maxSum = Math.max(maxSumResult.maxSum, currentMax)
  
      return node.value + Math.max(leftMax, rightMax)
    }
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = { value: null }
    this._nextLargerHelper(this.root, lowerBound. result)
    return result.value;
  }

  _nextLargerHelper(node, lowerBound, result) {
    if (node === null) {
      return;
    }

    this._nextLargerHelper(node.left, lowerBound, result);


    if (node.value > lowerBound) {
      if (result.value === null || node.value < result.value) {
        result.value = node.value;
      }
    }

    this._nextLargerHelper(node.right, lowerBound, result);
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
