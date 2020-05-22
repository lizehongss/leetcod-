/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var result = []
  var allResult = []
  function calQueens(row) {
    if (row === n) {
      console.log(result)
      change(result)
      return
    }
    for (let column = 0; column < n; column++) {
      if (isOk(row, column)){
        result[row] = column
        calQueens(row + 1)
      }
    }
  }
  function isOk(rows, columns) {
    let leftup = columns - 1
    let rightUp = columns + 1
    for(let i =rows-1; i>=0; i--){
      if (result[i] === columns) return false
      if (leftup >=0) {
        if (result[i] === leftup) return false
      }
      if (rightUp < n) {
        if (result[i] === rightUp) return false
      }
      --leftup
      ++rightUp
    }
    return true
  }
  function change (result) {
    let a= []
    for (let row=0; row < n; row++) {
      for (let column = 0; column < n; column++) {
        if (a[row] === undefined) a[row] = []
        if(result[row] === column) {
          a[row][column] = "Q"
        } else {
          a[row][column] = "."
        }
      }
    }
    for(let i=0; i< a.length; i++) {
      a[i] = a[i].toString().replace(/,/g, '')
    }
    allResult.push(a)
  }
  calQueens(0)
  return allResult
};
// @lc code=end

