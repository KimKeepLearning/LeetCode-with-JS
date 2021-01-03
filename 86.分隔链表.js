/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head || !head.next) return head;
    let dummyhead = new ListNode(-1);
    dummyhead.next = head;
    let p = dummyhead;
    while (p.next && p.next.val < x) {
        p = p.next;
    }
    if (!p.next || !p.next.next) return head;

    let iter = p.next;
    while (iter.next) {
        if (iter.next.val < x && iter.next != p) {
            let tmp = p.next;
            p.next = iter.next;
            iter.next = iter.next.next;
            p.next.next = tmp;
            p = p.next;
        } else {
            iter = iter.next;
        }
    }
    return dummyhead.next;

};
// @lc code=end