/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString()
    for(let i =0 ; i < parseInt(x.length/2); i++) {
        if (x[i] != x[x.length-1-i]) return false
    }
    return true
};
// @lc code=end

