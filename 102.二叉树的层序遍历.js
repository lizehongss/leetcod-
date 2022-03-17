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
    if (root === null ) return []
    let result = []
    let query = [root]
    while(query.length != 0) {
        let curArray = []
        let length = query.length
        for(let i = 0 ; i< length; i++) {
            let node = query.shift()
            curArray.push(node.val)
            node.left  && query.push(node.left)
            node.right && query.push(node.right)
        }
        result.push(curArray)

    }
    return result

};
// @lc code=end

