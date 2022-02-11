/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    let arr = []
    function deep (root) {
        if (!root) return
        deep(root.left)
        arr.push(root.val)
        deep(root.right)
    }
    deep(root)
    console.log(arr, 'arr')
    for( let  i = 0 ; i< arr.length-1; i++) {
        if(arr[i] >= arr[i+1]) {
            return false
        }
    }
    return true
};
// @lc code=end

