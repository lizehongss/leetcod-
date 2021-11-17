/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let i = 0; i<magazine.length; i++) {
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1)
    }
    for(let i =0 ; i<ransomNote.length; i++) {
        if(!map.get(ransomNote[i])) {
            return false
        } else {
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
        }
    }
    return true
};
// @lc code=end

