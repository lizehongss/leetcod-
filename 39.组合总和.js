/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // const res = [], path = [];
    // candidates.sort(); // 排序
    // backtracking(0, 0);
    // return res;
    // function backtracking(j, sum) {
    //     if (sum > target) return;
    //     if (sum === target) {
    //         res.push(Array.from(path));
    //         return;
    //     }
    //     for(let i = j; i < candidates.length; i++ ) {
    //         const n = candidates[i];
    //         if(n > target - sum) continue;
    //         path.push(n);
    //         sum += n;
    //         backtracking(i, sum);
    //         path.pop();
    //         sum -= n;
    //     }
    // }
    let result = []
    let path = []
    candidates.sort()
    getPath(0,0)
    function getPath(sum, startIndex) {
        if (sum > target) return
        if (sum === target) {
            result.push([...path])
            return
        }
        for (let i = startIndex; i <candidates.length; i++) {
            if(candidates[i] > target - sum) continue;
            path.push(candidates[i])
            sum = sum + candidates[i]
            getPath(sum, i)
            sum = sum - candidates[i]
            path.pop()
        }
    }
    return result
};
// @lc code=end

