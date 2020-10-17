/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //v1——（我的）让两个链表从相同的起点开始出发
    if (!headA || !headB) return null;

    let aLength = 0, bLength = 0;
    let a = headA, b = headB;
    while (a) {
        aLength++;
        a = a.next;
    }
    while (b) {
        bLength++;
        b = b.next;
    }
    a = headA;
    b = headB;
    
    if (aLength > bLength) {
        while (aLength > bLength) {
            a = a.next;
            aLength--;
        }
    } else if(aLength < bLength){
        while (aLength < bLength) {
            b = b.next;
            bLength--;
        }
    }
    if (a === b) {
        return a;
    } 
    while (a && b) {
        if (a.next === b.next) {
            return a.next;
        }
        a = a.next;
        b = b.next;
    }
    return null;

    //v2——a+b=b+a....太牛了
    // let p = [headA, headB];
    // while (p[0] || p[1]) {
    //     if (p[0] === p[1]) return p[0];
    //     p[0] = p[0]===null ? headB : p[0].next;
    //     p[1] = p[1]===null ? headA : p[1].next;
    // }
    // return null;


};
// @lc code=end

