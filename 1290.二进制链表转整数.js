/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
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
 * @return {number}
 */
var getDecimalValue = function (head) {
    //递归， 2应该怎么递归不知道了
    // if (!head.next) return head.val;

    // let next = head.next;
    // let value = getDecimalValue(next);
    // value =value+ value* 2 + head.val ;
    // // console.log(head.val, value);

    // return value;

    //迭代
    let sum = 0, p = head;
    while (p) {
        sum = sum * 2 + p.val;
        p = p.next;
    }

    return sum;


};
// @lc code=end

