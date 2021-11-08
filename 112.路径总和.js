/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let arr = []
    function getTheSum(root, sum) {
        sum = sum + root.val
        if (!root.left && !root.right) {
            arr.push(sum)
        }
        root.left && getTheSum(root.left, sum)
        root.right && getTheSum(root.right, sum)
    }
    if (!root) return false
    getTheSum(root, 0)
    console.log(arr)
    console.log(arr.find(it => it === targetSum))
    return arr.findIndex(it => it == targetSum) != -1 ? true : false
};
// @lc code=end

