/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var matched = false
  function  rmatch (is, jp, s, p) {
  if (matched) return
  if (jp === p.length) {
    if (is === s.length) {
      matched = true
    }
    return
  }
  if (p[jp] === '*') {
    for (let k = 0; k <= s.length - is; ++k) {
      rmatch(is+k, jp+1,s,p)
    }
  } else if(p[jp] === '?') {
    rmatch(is+1,jp+1, s,p)
  } else if (is < s.length && p[jp] === s[is]) {
    rmatch(is+1,jp+1,s,p)
  }
} 
  rmatch(0, 0, s, p)
  return matched
};
// @lc code=end

