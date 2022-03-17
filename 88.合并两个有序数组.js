/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p = 0, q=0
    const sort = new Array(m+n).fill(0)
    var cur
    while(p < m || q <n) {
        if (p === m) {
            cur = nums2[q++]
        } else if(q === n) {
            cur = nums1[p++]
        } else if (nums1[p]< nums2[q]) {
            cur = nums1[p++]
        } else {
            cur = nums2[q++]
        }
        sort[p+q -1] = cur
    }
    for(let i = 0; i<p+q; i++) {
        nums1[i]=sort[i]
    }
};
// @lc code=end

