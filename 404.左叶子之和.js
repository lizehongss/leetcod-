/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    function getTheValue(root,comeFrom, sum) {
        if(!root) return 
        if(!root.left && comeFrom === 'left' && !root.right) {
            sum.push(root.val)
            return 
        }
        getTheValue(root.left, 'left', sum)
        getTheValue(root.right, 'right', sum)
    }
    let sum = []
    getTheValue(root.left, 'left', sum)
    getTheValue(root.right, 'right', sum)
    console.log(sum)
    if(sum.length === 0) return 0
    return sum.reduce((a, b) => a+b)

};
// @lc code=end

