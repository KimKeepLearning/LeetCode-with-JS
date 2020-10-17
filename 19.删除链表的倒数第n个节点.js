/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // if (!head || !head.next) return null;
    let fast = head;
    let slow = head;
    while (n>0) {
        fast = fast.next;
        n--;
    }
    if (!fast) return head.next;
    while (fast.next) {
        // console.log(slow.val);
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;

};
// @lc code=end

