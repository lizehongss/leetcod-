/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  let array = []
  function deep (root) {
    if (!root) return
    deep(root.left)
    array.push(root.val)
    deep(root.right)
  }
  deep(root)
  return array
};
// @lc code=end

