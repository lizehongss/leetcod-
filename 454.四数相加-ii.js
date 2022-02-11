/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = new Map()
    for(let i = 0 ; i<nums1.length; i++) {
        for(let j =0; j< nums2.length; j++) {
            let key = nums1[i] + nums2[j]
            if (map.has(key)) {
                map.set(key, map.get(key) + 1)
            } else {
                map.set(key, 1)
            }
        }
    }
    let count = 0
    for(let i = 0 ; i<nums3.length; i++) {
        for(let j = 0; j<nums4.length; j++) {
            let key = nums3[i] + nums4[j]
            count += (map.get(0-key) || 0)
        }
    }
    return count
};
// @lc code=end

