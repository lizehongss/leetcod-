/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let falg = 0
    if (a.length < b.length) {
        let result = a
        for (let i = 0; i < b.length - a.length; i++) {
            console.log(a, i)
            result = '0' + result
            console.log(a)
        }
        a = result
    } else if (a.length > b.length) {
        let result = b
        for (let i = 0; i < a.length - b.length; i++) {
            result = '0' + result
        }
        b = result
    }
    const replaceStr= (str, index, char) => {
         const strAry = str.split('');
         strAry[index] = char;
         return strAry.join('');
    }
    console.log(a,b)
    for (let i = a.length - 1; i >= 0; i--) {
        console.log(i)
        let res = falg + a[i] + b[i]
        console.log(res, 'res')
        falg = 0
        if (res === '001' || res === '010' | res === '100' ) {
            a = replaceStr(a, i , 1)
            falg = 0
        } else if (res === '011' || res === '101' || res === '110') {
            a = replaceStr(a, i , 0)
            falg = 1
        } else if (res === '111') {
            a = replaceStr(a, i , 1)
            falg = 1
        } else if (res === '000') {
            a = replaceStr(a, i , 0)
            falg = 0
        }
        console.log(a[i], i,'a[i]')
    }
    if (falg === 1) {
        return 1 + a
    } else {
        return a
    }
};
// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
//  var addBinary = function(a, b) {
//     // 为字符串补零
//     if (a.length < b.length) {
//       a = a.padStart(b.length, '0')
//     } else {
//       b = b.padStart(a.length, '0')
//     }
//     const len = a.length
//     // 储存结果
//     let res = ''
//     // 储存进位
//     let target = 0;
//     for (let i = 0; i < len; i++) {
//       // 每次遍历，temp为该位置两数之和加进位数
//       const temp = parseInt(a[len - i - 1]) + parseInt(b[len - i - 1]) + target
//       // temp 为 0-3的数字，temp余2为该位置结果
//       res = (temp % 2) + res;
//       // 若temp大于等于2，进一
//       target = temp < 2 ? 0 : 1;
//     }
//     // 若循环结束还有进位，补上
//     return target ? 1 + res : res
//   };
  
//   作者：jobsofferings
//   链接：https://leetcode-cn.com/problems/add-binary/solution/javascript-er-jin-zhi-qiu-he-kuai-su-jie-wy0e/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// @lc code=end

