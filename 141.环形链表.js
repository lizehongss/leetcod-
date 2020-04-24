/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 哈希表
// var hasCycle = function(head) {
//   let saveMap = []
//   while(head != null) {
//     if(saveMap.includes(head)) {
//       return true
//     } else {
//       saveMap.push(head)
//     }
//     head = head.next
//   }
//   return false
// };
// 双指针
var hasCycle = function(head) {
  if (!head || !head.next) return false
  let slow = head
  let  fast = head.next
  while(slow != fast) {
    if(fast === null || fast.next === null) {
      return false
    }
    slow = slow.next
    fast= fast.next.next
  }
  return true
};
// @lc code=end

