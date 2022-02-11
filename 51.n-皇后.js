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
            if ( !isSame(deep,i,used))  continue
            path.push(set(i))
            used[deep] = i
            setValue(deep+1, used)
            used[deep] = ''
            path.pop()
        }
    }
    function isSame( deep, index, used) {
        let leftUp = index - 1
        let rightUp = index + 1
        for (let i = deep -1; i >=0; i--) {
            if (used[i] == index) return false
            if (leftUp >=0) {
                if (used[i] == leftUp) return false
            }
            if (rightUp < n) {
                if (used[i] == rightUp) return false
            }
            --leftUp
            ++ rightUp
        }
        return true
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
    setValue(0, new Array(n).fill(''))
    return result

};
// @lc code=end

