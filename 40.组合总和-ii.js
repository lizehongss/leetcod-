/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []
    let path = []
    candidates.sort()
    function setItem(path, startIndex, sum) {
        if (sum > target) return
        if (sum === target) {
            result.push([...path])
            return
        }
        let f = -1
        for(let i = startIndex; i< candidates.length; i++) {
            if (candidates[i] > target -sum || candidates[i] === f) continue
            path.push(candidates[i])
            sum = sum + candidates[i]
            f = candidates[i]
            setItem(path, i+1, sum)
            sum = sum - candidates[i]
            path.pop()
        }
    }
    setItem(path, 0 , 0)
    console.log(result, 'result')
    return result
};
// @lc code=end

