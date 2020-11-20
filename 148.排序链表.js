/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
    // my 插入排序
    // if (!head || !head.next) return head;
    // let dummyhead = new ListNode();
    // dummyhead.next = head;
    // let p = head.next;
    // head.next = null;
    // while (p) {
    //     head = dummyhead;
    //     while (head.next && head.next.val <= p.val) head = head.next;
    //     let pnext = p.next;
    //     p.next = head.next;
    //     head.next = p;
    //     p = pnext;

    // }
    // return dummyhead.next;

    // 链表还是归并更快(递归)，因为合并的时候，链表不是有序的
    if (!head || !head.next) return head;
    let dummyhead = new ListNode(0, head);
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let p2 = slow.next,p = dummyhead;
    slow.next = null;
    
    head = sortList(head);
    p2 = sortList(p2);

    while (head && p2) {
        if (head.val < p2.val) {
            p.next = head;
            head = head.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    head ? p.next = head : p.next = p2;
    return dummyhead.next;


};
// @lc code=end

