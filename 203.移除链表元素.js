/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // 条件太多
    // while (head && head.val === val) {
    //     head = head.next;
    // }
    // if (!head) return head;
    
    // let prev = head;
    // let p = head;
    
    // while (p.next ) {
    //     if (p.val === val) {
    //         prev.next = p.next;
    //         p = prev.next;
    //     } else {
    //         prev = p;
    //         p = p.next;
    //     }
    // }
    // if (p.val === val) {
    //         prev.next = null;
    //     }
    // return head;

    // 
};
// @lc code=end

