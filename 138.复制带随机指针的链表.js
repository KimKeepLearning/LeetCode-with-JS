/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;
    //遍历一次？
    let p = head;
    while (p) {
        let node = new Node(p.val, null, null)
        node.next = p.next;
        p.next = node;
        p = p.next.next;
    }
    let prev = head;
    p = head.next;
    while (p.next) {
        if (prev.random!==null) p.random = prev.random.next;
        else p.random = prev.random;
        p = p.next.next;
        prev = prev.next.next;
        // prev = p.next;
        // p = prev.next;
    }
    if (prev.random!==null) p.random = prev.random.next;
    
    else p.random = prev.random;

    let dummyHead = new Node(-1, head.next, null);
    p = dummyHead.next;
    prev = head;
    while (p.next) {
        prev.next = prev.next.next;
        prev = prev.next;
        p.next = p.next.next;
        p = p.next;
    }
    prev.next = null;
    return dummyHead.next;
};
// @lc code=end

