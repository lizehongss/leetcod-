/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let result = []
  function deep (root) {
    if(!root) return
    deep(root.left)
    deep(root.right)
    result.push(root.val)
  }
  deep(root)
  return result
};
// @lc code=end

