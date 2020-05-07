/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    let thead = new ListNode(0);
    thead.next = head;
    let tmp = thead;
    while(tmp.next != null && tmp.next.next != null){
        let start = tmp.next;
        let end = start.next;
        tmp.next = end;
        start.next = end.next;
        end.next = start;
        tmp = start;
    }
    return thead.next;
};
// @lc code=end

