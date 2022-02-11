/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let arr = []
    let  m = matrix.length
    let n  = matrix[0].length
    let left  = 0
    let right = n - 1
    let top = 0
    let bottom  = m - 1
    while(left<=right  && top <=bottom) {
        console.log(left, right, top, bottom)
        for(let column = left; column <= right; column++) {
            arr.push(matrix[top][column])
        }
        for(let row = top+1; row <= bottom; row ++) {
            console.log(matrix[row])
            arr.push(matrix[row][right])
        }
        if (left < right && top < bottom) {
            for (let column = right -1; column > left; column--) {
                arr.push(matrix[bottom][column])
            }
            for(let row = bottom; row > top; row--) {
                arr.push(matrix[row][left])
            }
        }
        left ++ 
        right --
        top ++
        bottom --
    }
    return arr
};
// @lc code=end

