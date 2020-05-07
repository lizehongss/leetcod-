/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
  if (!head) return head
  let preHead = new ListNode(0)
  let curr  = head
  let pre = preHead
  let next = null
  while (curr) {
    next = curr.next
    while(pre.next && pre.next.val < curr.val) {
      pre = pre.next
    }
    curr.next = pre.next
    pre.next = curr
    pre = preHead

    
    curr = next
  }
  return preHead.next
};
// @lc code=end

