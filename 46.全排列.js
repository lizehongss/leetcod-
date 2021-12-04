/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let path = []
    function setItem (used) {
        if(path.length === nums.length) {
            result.push([...path])
        }
        for(let i =0 ; i< nums.length; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            setItem(used)
            used[i] = false
            path.pop()
        }
    }
    setItem([])
    return result
};
// @lc code=end

