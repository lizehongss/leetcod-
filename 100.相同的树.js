/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let arr1 = new Array()
    let arr2 = new Array()
    function saveArra(arr, p ,i) {
        if(!p) return
        arr[i] = p.val
        if (p.left) {
            arr[2*i] = p.left.val
            saveArra(arr,p.left, 2*i)
        }
        if (p.right) {
            arr[2*i +1] = p.right.val
            saveArra(arr,p.right, 2*i +1)
        }
    }
    saveArra(arr1, p, 1)
    saveArra(arr2, q, 1)
    if (arr1.length != arr2.length) return false
    for(let i = 0 ; i<arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false
        }
    }
    return true
};
// var isSameTree = function(p, q) {
//     if(p == null && q == null) 
//         return true;
//     if(p == null || q == null) 
//         return false;
//     if(p.val != q.val) 
//         return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// 作者：guanpengchn
// 链接：https://leetcode-cn.com/problems/same-tree/solution/hua-jie-suan-fa-100-xiang-tong-de-shu-by-guanpengc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// @lc code=end

