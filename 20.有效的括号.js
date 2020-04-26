/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// var isValid = function(s) {
//   let map = {
//       '{': '}',
//       '(': ')',
//       '[': ']'
//   }
//   let stack = []
//   for(let i = 0; i < s.length ; i++) {
//       if(map[s[i]]) {
//           stack.push(s[i])
//       } else if(s[i] !== map[stack.pop()]){
//           return false
//       }
//   }
//   return stack.length === 0
// };

// 作者：user7746o
// 链接：https://leetcode-cn.com/problems/valid-parentheses/solution/teng-xun-leetcode20you-xiao-de-gua-hao-by-user7746/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var isValid = function(s) {
  let sArray = s.split('')
  let stack = []
  let mapObject = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let isOk = true
  sArray.forEach(item => {
    if(item === '(' || item === '[' || item === '{') {
      stack.push(item)
    } else {
      if(item === mapObject[stack[stack.length - 1]]) {
        stack.pop()
      } else {
        isOk = false
      }
    }
  })
  if(stack.length != 0) { return false }
  return isOk
};
// @lc code=end

