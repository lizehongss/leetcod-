/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = []
    let path = []
    nums = nums.sort((a,b) => {
        return a - b
    })
    function setItem(startIndex) {
        result.push([...path])
        for(let i = startIndex; i< nums.length; i++) {
            if( i> startIndex && nums[i] === nums[i-1])  continue
            path.push(nums[i])
            setItem(i+1)
            path.pop()
        }
    }
    setItem(0)
    return result
};
// @lc code=end

