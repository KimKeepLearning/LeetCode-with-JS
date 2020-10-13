/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // let p1 = l1;
    // let p2 = l2;
    // let l3 = new ListNode();
    // let p3 = l3;
    // if (p1 == null) {
    //     return p2;
    // }
    // if (p2 == null) {
    //     return p1;
    // }
    // if (p1 == null && p2 == null) {
    //     return p1;
    // }
    // while (p1 && p2) {
    //     if (p1.val <= p2.val) {
    //         p3.next = p1;
    //         p1 = p1.next;
    //     } else {
    //         p3.next = p2;
    //         p2 = p2.next;
    //     }
    //     p3 = p3.next;
    // }
    // p3.next = p1 ? p1 : p2;
    // return l3.next;
    /*
     * 优化，有些变量可以不定义 
        不用新建一个链表
     */
    let l3 = new ListNode();
    let p3 = l3;
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            p3.next = l1;
            l1 = l1.next;
        } else {
            p3.next = l2;
            l2 = l2.next;
        }
        p3 = p3.next;
    }
    p3.next = l1 ? l1 : l2;
    return l3.next;

    /*
    利用迭代
    */
    // let l3 = new ListNode();
    // let p3 = l3;
    // if (l1 == null) {
    //     return l2;
    // }
    // if (l2 == null) {
    //     return l1;
    // }
    // if (l1.val < l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2);
    //     return l1;
    // } else {
    //     l2.next = mergeTwoLists(l1, l2.next);
    //     return l2;
    // }

};
// @lc code=end

