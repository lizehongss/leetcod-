/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//   let dummy = new ListNode(0)
//   dummy.next = head
//   let i = dummy
//   let j = dummy
//   // 让j先走n步
//   while (n) {
//     j = j.next
//     n--
//   }
//   // 一起走！！！
//   while (j.next) {
//     i = i.next
//     j = j.next
//   }
//   // 此时j走到了最后一个节点 i此时是需要删除节点的前一节点
//   // 开始链接！！！！
//   i.next = i.next.next
//   // 链接成功！！！！
//   return dummy.next
// }

// 作者：dayue95
// 链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/kuai-man-zhi-zhen-qie-tu-zi-men-jia-you-a-dai-zhu-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  // l-n l-n+1 l-n+2
var removeNthFromEnd = function(head, n) {
  let dummy =  new ListNode(0)
  dummy.next = head
  let first = head
  let length = 0
  while(first != null) {
    length++
    first = first.next
  }
  length = length -n
  first = dummy
  while (length > 0) {
    length -- 
    first = first.next
  }
  first.next = first.next.next
  return dummy.next
};
// @lc code=end

