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
var reverseList = function(head) {
    // 迭代
    // if (!head || !head.next) return head;
    // let cur = head.next;
    // let tail = cur;
    // head.next = null;
    // while (cur) {
    //     tail = cur.next;
    //     cur.next = head;
    //     head = cur;
    //     cur = tail;
    // }
    // return head;

    //递归
    if (!head || !head.next) return head;
    
    let next = head.next;
    let reverseHead = reverseList(next);
    head.next = null;
    next.next = head;


    return reverseHead;


};
// @lc code=end

