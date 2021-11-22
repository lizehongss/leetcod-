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

// kmp 算法
const getNext = (needle) => {
    let next = []
    let j = -1
    next.push(j)
    for(let i = 1 ; i < needle.length; i++) {
        while(j>=0 && needle[i] !== needle[j+1])
            j = next[j]
        if (needle[i] === needle[j+1])
            j++
            next.push(j)
    }
    return next
}
let next = getNext(needle)
let j = -1
for(let i = 0; i< haystack.length; ++i) {
    while(j>=0 && haystack[i] != needle[j+1]) 
        j= next[j]
    if (haystack[i] === needle[j+1])
        j++
    if (j = needle.length -1)
     return (i - needle.length + 1)
}
return - 1
// @lc code=end

