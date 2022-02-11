/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowerPrice = prices[0]
    let profit = 0
    for(let i = 0; i < prices.length; i++) {
        lowerPrice = Math.min(lowerPrice, prices[i]) // 选择左面最小价格
        profit = Math.max(profit, prices[i] - lowerPrice)
    }
    return profit
};
// @lc code=end

