/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    let path = []
    
    function setItem(startIndex) {
        result.push ([...path])
        for(let i = startIndex; i<nums.length; i++) {
            path.push(nums[i])
            setItem(i + 1)
            path.pop()
        }
    }
    setItem(0)
    return result
};
// @lc code=end

