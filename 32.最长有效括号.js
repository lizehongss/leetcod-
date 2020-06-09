/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var max = 0;
  var stack = [-1];
  for(var i = 0;i < s.length;i++){
      if(s[i] == '('){
          stack.push(i);
      }else{
          stack.pop();
          if(stack.length == 0){
              stack.push(i);
          }else{
              max = Math.max(max,i - stack[stack.length-1]);
          }
      }
  }
  return max;
};
// @lc code=end

