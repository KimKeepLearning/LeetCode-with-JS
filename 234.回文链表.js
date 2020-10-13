/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
/* 利用栈，回文的出栈顺序和入栈顺序是一样的 */
    // if (!head || !head.next) return true;
    // var stack = [];
    // while (head) {
    //     stack.push(head.val);
    //     head = head.next;
    // }
    // var ispa = true;
    // while (stack.length > 1) {
    //     if (stack.pop() != stack.shift()) {
    //         ispa = false;
    //         return ispa;
    //     }
    // }
    // return ispa;

    /*能用栈，那就能用递归？ */
    
    /* 用字符串*/
    // if (!head || !head.next) return true;
    // var stack = [];
    // while (head) {
    //     stack.push(head.val);
    //     head = head.next;
    // }
    
    // return stack.toString() === stack.reverse().toString();

/*快慢指针 O(n) O(1) */
    if (!head || !head.next) return true;
    let fast = head;
    let mid = head;
    while (fast && fast.next) {
        mid = mid.next;
        fast = fast.next.next;
    }
    if (fast) {
        mid = mid.next;
    }
    console.log(mid.val);
    let newh = reverse(mid);
    // console.log(newh.next.val);
    while (newh && head) {
        if (newh.val != head.val) {
            return false;
        }
        newh = newh.next;
        head = head.next;
    }
    return true;
};
// 反转列表
var reverse = function (head) {
    if (!head || !head.next) return head;
    let end = head;
    let p = end.next;
    head.next = null;
    while (p) {
        end = p.next;
        p.next = head;
        head = p;
        p = end;
    }
    return head;
}


// @lc code=end


