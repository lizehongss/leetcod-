/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') return []
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let result = []
    let item = []
    let arr =  digits.split('')
    setItem(0, item)
    function setItem (i, item) {
        if(i > arr.length -1) {
            result.push(item.join(''))
            return
        }
        let strArray = map[arr[i]].split('')
        for(let j = 0; j<strArray.length; j++) {
            item.push(strArray[j])
            i = i + 1
            setItem(i, item)
            i = i - 1
            item.pop()
        }

    }
    return result
};
// @lc code=end

