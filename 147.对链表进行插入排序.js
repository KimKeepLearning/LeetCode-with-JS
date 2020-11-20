/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
    // my 插入排序
    if (!head || !head.next) return head;
    let dummyhead = new ListNode();
    dummyhead.next = head;
    let p = head.next;
    head.next = null;
    while (p) {
        head = dummyhead;
        while (head.next && head.next.val <= p.val) head = head.next;
        let pnext = p.next;
        p.next = head.next;
        head.next = p;
        p = pnext;

    }
    return dummyhead.next;
};
// @lc code=end

