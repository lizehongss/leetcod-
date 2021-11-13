/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let arr = []
    function deep (root) {
        if (!root) return 
        deep(root.left)
        arr.push(root.val)
        deep(root.right)
    }
    deep (root)
    function getSum(val) {
        let sum = 0
        for(let i = 0 ;i <arr.length; i++) {
            if (arr[i] >= val) sum += arr[i]
        }
        return sum
    }
    function changeRoot(root) {
        if (!root) return
        changeRoot(root.left)
        root.val = getSum(root.val)
        changeRoot(root.right)
    }
    changeRoot(root)
    return root
};
// @lc code=end

