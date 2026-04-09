/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
    //We will use Floyd's cycle detection algorithm
    //Tortoise and Hare method
    if(head === null || head.next ===null){
        return false;
    }
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;

        if(slow === fast){
            return true;
        }
    }

    return false;
    }
}
