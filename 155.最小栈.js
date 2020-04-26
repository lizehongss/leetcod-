/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stackArray = []
  this.min = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if(!this.stackArray.length) this.min = x 
  this.min = Math.min(x, this.min)
  this.stackArray.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stackArray.pop()
  this.min = Math.min(...this.stackArray)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stackArray[this.stackArray.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

