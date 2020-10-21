/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next || !head.next.next) return head;
    let mid = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        mid = mid.next;
    }
    let stack = [];
    let p = mid.next;
    while (p) {
        stack.push(p);
        p = p.next;
    }
    mid.next = null;
    p = head;
    while (stack.length) {
        let next = p.next;
        let newNode = stack.pop();
        p.next = newNode;
        newNode.next = next;
        p = next;

    }
    return head;

};
// @lc code=end

