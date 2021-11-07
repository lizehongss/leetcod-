/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
    let maxDeep = 0
    let maxValue = null
    function findTheItem(root, deep ) {
        if (!root.left && !root.right) {
            if (deep > maxDeep) {
                maxDeep = deep
                maxValue = root.val
            }
        }
        root.left && findTheItem(root.left, deep + 1)
        root.right && findTheItem(root.right, deep + 1)
    }
    findTheItem(root, 1)
    return maxValue
};
// @lc code=end

