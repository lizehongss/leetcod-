/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = []
    let path = []
    function setValue(deep, used) {
        if(deep > n -1) {
            result.push([...path])
            return
        }
        for (let i = 0; i<n; i++) {
            if ( !isSame(i,used))  continue
            path.push(set(i))
            used[deep] = i
            setValue(deep+1, used)
            used[deep] = undefined
            path.pop()
        }
    }
    function isSame( index, used) {
        let isOk = true
        for (let i = 0; i < used.length; i++  ) {
            if (used[i] === index) {
                isOk = false
                break
            }
        }
        for (let i = index - 1; i > 0; i--) {
            if (used[i] === i) {
                isOk = false
                break
            }
        }
        let deep =  index - 1
        for (let i = index + 1; i< n; i++) {
            if (deep < 0) break
            if (used[deep] === i) {
                isOk = false
                break
            }
            deep--
        }
        return isOk
    }
    function set(pos) {
        let s = ''
        for(let i =0 ; i<n; i++) {
            if (pos != i) {
                s+='.'
            } else {
                s+='Q'
            }
        }
        return s
    }
    setValue(0, [])
    return result

};
// @lc code=end

