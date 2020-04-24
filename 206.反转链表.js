/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// 迭代
// var reverseList = function(head) {
//   if ( !head || !head.next ) return head
//   var current = head
//   var prev = null
//   while(current) {
//     // 临时指针
//     var next = current.next
//     current.next = prev
//     prev = current
//     current = next
//   }
//   head = prev
//   return head
// };
// 递归
var reverseList = function(head) {
  if ( !head || !head.next ) return head
  let next  = head.next
  let reverseHead = reverseList(next)
  head.next = null
  next.next = head
  return reverseHead
};
// @lc code=end

