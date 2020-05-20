/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let sum = 0
  let left = []
  let right = []
  for(let i=0; i< ratings.length; i++) {
    left[i] = 1
    right[i] = 1
  }
  for(let i=1; i< ratings.length; i++) {
    if(ratings[i] > ratings[i-1]) {
      left[i] = left[i-1] + 1
    }
  }
  for (let i = ratings.length -2; i>=0; i-- ) {
    if(ratings[i] > ratings[i+1]) {
      right[i] = right[i+1] + 1
    }
  }
  for (let i=0; i< ratings.length; i++) {
    sum += Math.max(left[i],right[i])
  }
  return sum;
};
// @lc code=end

