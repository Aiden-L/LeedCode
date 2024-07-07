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
var hasCycle2 = function(head) {
    while(head) {
        if (head.marked) {
            return true
        }
        head.marked = true
        head = head.next
    }
    return false
};

var hasCycle = function(head) {
    let hash_l = new Set()
    while(head) {
        if (hash_l.has(head)) {
            return true
        } else {
            hash_l.add(head)
        }
        head = head.next
    }
    return false
};