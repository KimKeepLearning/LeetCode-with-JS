/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    // 递归列表
    // let res = [];
    // var traverse = (head) => {
    //     if (!head) return;
    //     traverse(head.next);
    //     res.push(head.val);
    // }
    // traverse(head);
    // return res;

    // 利用数组特性
    let res = [];
    while(head){
        res.unshift(head.val);
        head=head.next;
    }
    return res;

};