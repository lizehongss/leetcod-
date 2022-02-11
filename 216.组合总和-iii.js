/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let result = []
let path = []
var combinationSum3 = function(k, n) {
    result = []
    combineHelper(9, k, 1, 0, n)
    return result
};

const combineHelper = (n, k, startIndex, sum, targetSum) => {
    if (sum > targetSum ) return
    if (path.length === k) {
        if (sum === targetSum) {
            result.push([...path])
        }
        return
    }
    for (let i = startIndex; i<= n-(k-path.length)+ 1; ++i) {
        path.push(i)
        sum = sum + i
        combineHelper(n, k, i + 1, sum, targetSum)
        sum = sum - i
        path.pop()
    }
}
// @lc code=end

