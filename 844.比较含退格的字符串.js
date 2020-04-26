/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let sArray = S.split('')
    let tArray = T.split('')
    let save_s = []
    let save_t = []
    sArray.forEach(item => {
      if (item != '#') {
        save_s.push(item)
      } else {
        save_s.pop()
      }
    })
    tArray.forEach(item => {
      if (item != '#') {
        save_t.push(item)
      } else {
        save_t.pop()
      }
    })
    return save_s.toString() === save_t.toString()
};
// @lc code=end

