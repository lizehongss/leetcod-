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
// var evalRPN = function(tokens) {
//   let fun = () => {
//       let char = tokens.pop();
//       let num;//由于减法和除法的存在顺序问题
//       switch (char) {
//       case "+":
//           return fun() + fun();
//       case "-":
//           num = fun();
//           return fun() - num;
//       case "*":
//           return fun() * fun();
//       case "/":
//           num = fun();
//           return parseInt(fun() / num, 10);
//       default:
//           return parseInt(char, 10);
//       }    
//   }
//   return fun();
// };

// 作者：lvshanke
// 链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/solution/dan-ke-xi-lie-yong-shi-9982nei-cun-10000-by-lvsh-2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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

