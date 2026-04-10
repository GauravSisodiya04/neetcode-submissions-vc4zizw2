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
     * @return {void}
     */
    reorderList(head) {
    if (!head || !head.next) return;

    // STEP 1: Find the middle of the list
    // Fast moves 2x speed, Slow moves 1x. When Fast hits end, Slow is at middle.
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // STEP 2: Reverse the second half
    // 'slow' is the start of the second half. 
    // We reverse everything from 'slow.next' onwards.
    let prev = null;
    let curr = slow.next;
    slow.next = null; // Cut the list into two halves

    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    // 'prev' is now the head of the reversed second half
    let second = prev;
    let first = head;

    // STEP 3: Merge the two halves (Zipping)
    while (second !== null) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
};

/* TIME COMPLEXITY: O(n)
   - Finding middle: O(n/2)
   - Reversing: O(n/2)
   - Merging: O(n/2)
   Total: O(n)

   SPACE COMPLEXITY: O(1)
   We are rearranging pointers in-place. No extra data structures used.
*/



}
