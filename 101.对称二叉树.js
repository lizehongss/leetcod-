/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    function common(p,q){
        if (p === null && q === null) {
            return true
        }
        if (p===null || q === null || p.val != q.val) {
            return false
        }
        return common(p.left, q.right) && common(p.right, q.left)
    }
    if (root === null) return true
    return common(root.left, root.right)
    
};
// @lc code=end

