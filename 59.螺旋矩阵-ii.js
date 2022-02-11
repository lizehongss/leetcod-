/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let startX = startY = 0;   // 起始位置
    let loop = Math.floor(n/2);   // 旋转圈数
    let mid = Math.floor(n/2);    // 中间位置
    let offset = 1;    // 控制每一层填充元素个数
    let count = 1;     // 更新填充数字
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

    while(loop--) {
        let row = startX
        let col = startY
        //  从左到右
        for(; col < startY + n - offset; col++) {
            res[row][col] = count ++
        }
        // 右列从上到下
        for(; row < startX + n -offset; row ++) {
            res[row][col] = count++
        }
        // 下行从右到左
        for(; col > startX; col --) {
            res[row][col] = count ++
        }
        // 左列从下到上
        for(; row > startY; row--) {
            res[row][col] = count ++
        }
        startX ++;
        startY ++
        offset +=2
    }
    if (n % 2 === 1) {
        res[mid][mid] = count
    }
    return res
 };
// @lc code=end

