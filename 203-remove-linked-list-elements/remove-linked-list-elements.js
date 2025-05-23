/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let node = {val:-1, next:head}
    let curr = node
    while(curr.next !== null){
        if(curr.next.val == val){
            curr.next = curr.next.next
        }else {
            curr = curr.next
        }
    }
    return node.next
};