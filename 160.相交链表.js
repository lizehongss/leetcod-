/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    function getLength(head) {
      let len =0 , cur = head
      while(cur) {
        len ++
        cur = cur.next
      }
      return len
    }
    let curA = headA, curB = headB
    let lenA = getLength(curA)
    let lenB = getLength(curB)
    if (lenA < lenB) {
      [curA, curB] = [curB, curA];
      [lenA, lenB] = [lenB, lenA];
    }
    let i = lenA - lenB
    while(i-- > 0) {
      curA = curA.next
    }
    while(curA && curA !=curB) {
      curA = curA.next
      curB = curB.next
    }
    return curA
};
// @lc code=end

