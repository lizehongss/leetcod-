/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let numsStack = []
  let flag = ['+', '-', '*', '/']
  for(let i = 0 ; i< tokens.length; i++) {
    if(!flag.includes(tokens[i])) {
      numsStack.push(tokens[i])
    } else {
      let num1 = numsStack[numsStack.length - 1]
      numsStack.pop()
      let num2 = numsStack[numsStack.length - 1]
      numsStack.pop()
      let result = eval(num2 + tokens[i] +'('+num1 + ')')
      console.log(parseInt(result))
      numsStack.push(parseInt(result))
    }
  }
  console.log(numsStack)
  return numsStack[0]
};
// @lc code=end

