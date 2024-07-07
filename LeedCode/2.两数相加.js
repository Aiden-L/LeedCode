/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newList = new ListNode()
    let pointer = newList
    while (l1 != null || l2 != null) {
        pointer.val += (l1?l1.val:0) + (l2?l2.val:0)
        if (pointer.val > 9) {
            pointer.next = new ListNode(1)
            pointer.val %= 10
        } else {
            if ((l1 && l1.next) || (l2 && l2.next)){
                // 如果有后续，则增加节点
                pointer.next = new ListNode()
            }
        }
        pointer = pointer.next
        if (l1){
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    return newList
};

let l1_list = [2,4,3]
let l2_list = [5,6,4]

let pointer1 = l1 = new ListNode(l1_list[0])
for (let i = 1; i < l1_list.length; i++) {
    pointer1.next = new ListNode(l1_list[i])
    pointer1 = pointer1.next
}
let pointer2 = l2 = new ListNode(l2_list[0])
for (let i = 1; i < l2_list.length; i++) {
    pointer2.next = new ListNode(l2_list[i])
    pointer2 = pointer2.next
}

let ans = addTwoNumbers(l1, l2)
let ans_list = []
while (ans) {
    ans_list.push(ans.val)
    ans = ans.next
}
console.log(ans_list)
