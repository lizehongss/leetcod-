/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0
    let n = haystack.length
    let m = needle.length
    for(let i = 0; i<= n-m; i++) {
        let str = haystack.slice(i, i+m)
        if (str === needle) {
            return i
        }
    }
    return -1

};
// @lc code=end

