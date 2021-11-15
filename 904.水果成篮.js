/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let start = 0 ,end = 0
    let res = 0
    let nums_length = fruits.length
    while (end < nums_length) {
        while (isCanUse(start, end)) {
            console.log(start, end)
            res = Math.max(res, end-start + 1)
            console.log(res)
            start ++ 
        }
        end++
    }
    function isCanUse(start, end) {
        let arr = []
        for (let i = start; i<=end; i++ ) {
            if (!arr.includes(fruits[i])) {
                arr.push(fruits[i])
            }
        }
        console.log(arr)
        return arr.length === 2 ? true : false
    }
    return res
};
// @lc code=end

