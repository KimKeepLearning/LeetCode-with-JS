/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 利用栈
    let stack1 = [];
    let stack2 = [];
    let stack = [];

    let cur1 = l1;
    let cur2 = l2;
    let addone = 0;

    while (cur1) {
        stack1.push(cur1.val);
        cur1 = cur1.next;
    }

    while (cur2) {
        stack2.push(cur2.val);
        cur2 = cur2.next;
    }
    // console.log(stack1, stack2);
    let a = 0;
    let b = 0;
    
    while (stack1.length > 0 || stack2.length > 0) {
        a = stack1.pop() || 0;
        b = stack2.pop() || 0;
        // console.log(a, b);
        stack.push((a + b + addone) % 10);
        addone = a + b + addone >= 10 ? 1 : 0; 
    }

    if (addone === 1) {
            stack.push(1);
    }

    let dummyhead = new ListNode(-1);
    let p = dummyhead;
    // console.log(stack);
    while (stack.length) {
        let node = new ListNode(stack.pop());
        p.next = node;
        p = node;
    }
    return dummyhead.next;
        




};
// var reverseList = function (head) {
//     if (!head || !head.next) return head;
//     let next = head.next;
//     let newHead = reverseList(next);
//     head.next = null;
//     next.next = head;
//     return newHead;
// }
// @lc code=end

