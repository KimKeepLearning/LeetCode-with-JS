/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    var length = 0;
    var p = root;
    var result = [];
    while (p) { length++; p = p.next; }

    var lenNull = length % k;
    var subLen = parseInt(length / k) ;
    p = root;

    // console.log(lenNull, subLen);
    let next = p;
    while (next) {
        var nowLen = 0;
        if (lenNull > 0) {
            nowLen = subLen + 1;
            lenNull--;
        } else {
            nowLen = subLen;
        }
        next = p;
        while (nowLen > 1) { nowLen--; next = next.next; }
        let prev = next;
        next = prev.next;
        prev.next = null;
        result.push(p);
        p = next;
    }
    // console.log(k, length);
    if (k > length) {
        lenNull = k - length;
        while (lenNull) {
            result.push(null);
            lenNull--;
        }
    }


    return result;





};
// @lc code=end

