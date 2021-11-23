/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const getNext = (s) => {
        let j = -1
        let next = []
        next.push(-1)
        for (let i = 1; i< s.length; i++) {
            while (j >=0 && s[i] != s[j+1])
                j = next[j] 
            if (s[i] === s[j+1])
                j++
            next.push(j)
        }
        return next
    }
    if (s.length === 0) return false
    let next = getNext(s)
    if (next[next.length -1] !== -1 && s.length %(s.length - (next[next.length-1] +1)) === 0)
        return true
    return false
};
// @lc code=end

