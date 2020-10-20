/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;
    let p = dummyHead;
    let prev = dummyHead;
    while (p.next && p.next.next) {
        if (p.next.val == p.next.next.val) {
            prev = p;
            p = p.next;
            while ( p.next && p.val == p.next.val ) { p = p.next; }
            prev.next = p.next;
            p = prev;
        }
        else {
            p = p.next;
        }
    }
    return dummyHead.next;

};
// @lc code=end

