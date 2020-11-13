/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) return head;
    let p = head, q = head.next,head2 = head.next;
    while (p.next && q.next) {
        p.next = q.next;
        p = q.next;
        q.next = p.next;
        q = p.next;
    }
    p.next = head2;
    return head;

};
// @lc code=end

