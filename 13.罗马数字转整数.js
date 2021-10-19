/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let index = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV":4,
        "IX": 9,
        "XL":40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    let newArray = []
    for(let i= 0 ; i< s.length; i++) {
        if(index.findIndex(it=> it === s[i])< index.findIndex(it=> it === s[i+1])){
            newArray.push(s[i]+s[i+1])
            i ++
        } else {
            newArray.push(s[i])
        }
    }
    console.log(newArray, 'newArray')
    let total = 0
    for(let i= 0; i< newArray.length; i++) {
        total += parseInt(map[newArray[i]])
    }
    return total
};
// 更好的解
// 若存在小的数字在大的数字的左边的情况，根据规则需要减去小的数字。对于这种情况，我们也可以将每个字符视作一个单独的值，
// 若一个数字右侧的数字比它大，则将该数字的符号取反
// var romanToInt = function(s) {
//     const symbolValues = new Map();
//     symbolValues.set('I', 1);
//     symbolValues.set('V', 5);
//     symbolValues.set('X', 10);
//     symbolValues.set('L', 50);
//     symbolValues.set('C', 100);
//     symbolValues.set('D', 500);
//     symbolValues.set('M', 1000);  
//     let ans = 0;
//     const n = s.length;
//     for (let i = 0; i < n; ++i) {
//         const value = symbolValues.get(s[i]);
//         if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
//             ans -= value;
//         } else {
//             ans += value;
//         }
//     }
//     return ans;
// };

// @lc code=end

