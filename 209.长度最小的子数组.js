/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0,end = 0,sum = 0;
    let res = Infinity
    let nums_length = nums.length
    while(end<nums_length){
        sum+=nums[end]
        while(sum>=target){
            res = Math.min(res,end-start+1)
            sum-=nums[start++]
        }
        end++
    }
    return res===Infinity? 0:res

// 作者：ustinian-mx
// 链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/209-chang-du-zui-xiao-de-zi-shu-zu-bao-l-gsu5/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};
// @lc code=end

