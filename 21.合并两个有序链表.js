/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归
// var mergeTwoLists = function(l1, l2) {
//   if(l1 === null){
//       return l2;
//   }
//   if(l2 === null){
//       return l1;
//   }
//   if(l1.val < l2.val){
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//   }else{
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//   }
// };

// 作者：guanpengchn
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/hua-jie-suan-fa-21-he-bing-liang-ge-you-xu-lian-bi/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var mergeTwoLists = function(l1, l2) {
    // 迭代
    let prehead  = new ListNode(-1)
    let prev = prehead
    while(l1!=null &&l2!=null) {
      if(l1.val<l2.val) {
        prev.next = l1
        l1 = l1.next
      } else {
        prev.next = l2
        l2 = l2.next
      }
      prev = prev.next
    }
    prev.next = l1 === null ? l2:l1
    return prehead.next
};
// @lc code=end

