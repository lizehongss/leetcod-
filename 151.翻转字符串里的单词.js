/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ').filter(it => !!it)
    console.log(arr)
    let i = -1 
    let j =arr.length
    while(++i < --j)[arr[i], arr[j]] = [arr[j], arr[i]]
    return arr.join(' ')
};
// @lc code=end

