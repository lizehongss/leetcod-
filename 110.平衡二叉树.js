/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function height(root) {
        if (root === null) {
            return 0
        }
        let left = height(root.left)
        let right = height(root.right)
        if (left=== -1 || right === -1 || Math.abs(left - right)> 1) {
            return -1
        }
        return Math.max(left, right) + 1
    }
    return height(root) != -1
};
// @lc code=end

