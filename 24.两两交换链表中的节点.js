/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
    // 迭代
    // if (!head || !head.next) return head;
    // let dummyHead = new ListNode(-1);
    // dummyHead.next = head;
    // let p1 = head.next;
    // let p2 = p1.next;
    // let cur = dummyHead;
    // while (cur.next && cur.next.next) {
    //     p1 = cur.next;
    //     p2 = cur.next.next;
    //     cur.next = p2;
    //     p1.next = p2.next;
    //     p2.next = p1;
    //     cur = p1; 
    // }
    // return dummyHead.next;

    // 递归
    if (!head || !head.next) return head;

    let newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;

    return newHead;

};
// @lc code=end


