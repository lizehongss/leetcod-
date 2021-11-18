/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split('')
    for(let i = 0 ; i<s.length; i+=2*k) {
        let l = i-1, r=i+k >s.length ? s.length : i+ k
        while(++l < --r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
        }
    }
    return arr.join('')
};
// @lc code=end

