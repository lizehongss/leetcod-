/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let resultMap = []
    resultMap[0] = cost[0]
    resultMap[1] = cost[1]
    for(let n =2; n< cost.length; n++) {
        resultMap[n] = Math.min(resultMap[n-1], resultMap[n-2]) + cost[n]
    }
    return Math.min(resultMap[cost.length - 1], resultMap[cost.length - 2])

};
// @lc code=end

