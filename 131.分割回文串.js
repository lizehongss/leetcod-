/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const isPalindrome = (s, l, r) => {
        for (let i = l ,j=r; i<j; i++, j--) {
            if (s[i] !== s[j]) return false
        }
        return true
    }
    let result = []
    let path = []
    setItem(0)
    function setItem(i) {
        if( i >= s.length) {
            result.push([...path])
        }
        for(let j = i ; j < s.length; j++) {
            if (!isPalindrome(s,i, j)) continue
            path.push(s.substr(i, j-i+1))
            setItem(j+1)
            path.pop()
        }
    }
    console.log(result)
    return result
};
// @lc code=end

