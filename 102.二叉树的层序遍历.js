/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arr = []
    function deep(arr, root, deepNum) {
        if(!root) return
        if (Array.from(arr[deep])){
            arr[deep].push(root.val)
        } else {
            arr[deep] = []
            arr[deep].push(root.val)
        }
        if(root.left) {
            deep(arr, root.left, deepNum+1)
        }
        if (root.right) {
            deep(arr, root.right, deepNum+1)
        }
    }
    deep(arr, root, 0)
    return arr
};
// @lc code=end

