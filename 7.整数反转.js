/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let string = x.toString().split('')
    let num 
    if (string[0] === '-') {
        string = string.slice(1, string.length)
        num = -parseInt(string.reverse().join(''))
    } else {
        num = parseInt(string.reverse().join(''))
    }
    if (num > Math.pow(2,31) - 1 || num < -( Math.pow(2,31) - 1) ) {
        return 0
    } else {
        return num
    }
};
// @lc code=end

