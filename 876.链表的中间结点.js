/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function(head) {
    // v1  快慢指针
    let fast = head;
    let mid = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        mid = mid.next;
    }
    return mid;



};
// @lc code=end

