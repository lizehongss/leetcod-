/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let useIndex = 0
    let minSize = 0
    for (let i = 0 ; i <strs.length; i++) {
        if(strs.length< minSize) {
            minSize = strs.length
            useIndex = i
        }
    }
    let platter = strs[useIndex]
    let falg = false
    for (let i = 0; i< platter.length; i++) {
        let p1 = platter.slice(0, platter.length - i)
        falg = true
        for (let j = 0; j <strs.length; j++) {
            if (strs[j].search(p1) != 0) {
                falg = false
                break;
            }
        }
        if (falg) {
            return p1
        }
    }
    return ''
};
// 令最长公共前缀 ans 的值为第一个字符串，进行初始化
// 遍历后面的字符串，依次将其与 ans 进行比较，两两找出公共前缀，最终结果即为最长公共前缀

// @lc code=end

