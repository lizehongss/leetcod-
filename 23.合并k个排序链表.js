/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeTwoLists (l1, l2) {
  let prehead = new ListNode(-1)
  let prev = prehead
  while(l1 != null && l2 != null) {
    if(l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = 11 === null ? l2:l1
  return prehead.next
}
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1]);
  }
  let mid = lists.length >> 1
  return mergeTwoLists(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid, lists.length)));
};
// @lc code=end

