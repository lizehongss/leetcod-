/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
// var addTwoNumbers = function(l1, l2) {
//   let node = new ListNode('head');
//   let temp = node;//哑结点
//   let add = 0;//是否进一
//   let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

//   //遍历，直到最长的都为空
//   while(l1 || l2){
//       sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
//       temp.next = new ListNode(sum % 10);//取余则为新链表的值
//       temp = temp.next;
//       add = sum >= 10 ? 1 : 0;
//       l1 && (l1 = l1.next);
//       l2 && (l2 = l2.next);
//   }
//   add && (temp.next = new ListNode(add));
//   return node.next;
// };

// 作者：lvshanke
// 链接：https://leetcode-cn.com/problems/add-two-numbers/solution/zhi-xing-yong-shi-chao-guo-8246nei-cun-xiao-hao-ch/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var addTwoNumbers = function(l1, l2) {
  let newList = new ListNode(null)
  let result = newList
  let temp = 0
  while(l1 || l2) {
    let resultVal = 0
    if(!l1) {
      resultVal = l2.val +temp
      l2 = l2.next || null
    } else if(!l2) {
      resultVal = l1.val + temp 
      l1 = l1.next || null
    } else {
      resultVal = l1.val + l2.val + temp
      l1 = l1.next || null
      l2 = l2.next || null
    }
    let lengArray = resultVal.toString()
    if(lengArray.length >1) {
      result.next = new ListNode(Number(lengArray[1]))
      result.next.next = new ListNode(Number(1))
      temp = 1
    } else {
      result.next = new ListNode(Number(resultVal))
      temp = 0
    }
    result = result.next
  }
  if (temp === 1) {
    result.next = new ListNode(Number(1))
  }
  return newList.next

};
// @lc code=end

