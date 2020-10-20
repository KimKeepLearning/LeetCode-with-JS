/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // v1 旋转的动作进行k%length次
    if (!head || !head.next) return head;
    let dummyhead = new ListNode(-1);
    dummyhead.next = head;

    let iter = head;
    let length = 0;
    while (iter) { length++; iter = iter.next; }

    k = k % length;
    while (k > 0) {
        let p = dummyhead.next;
        while (p.next.next){ p = p.next};
        p.next.next = dummyhead.next;
        dummyhead.next = p.next;
        p.next = null;
        k--;
    }
    return dummyhead.next;


};
// @lc code=end

