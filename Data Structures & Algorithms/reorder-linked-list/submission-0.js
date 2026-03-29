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

        let oldHead = head;
        let slow = head;
        let fast = head;

        //find the middle of the list

        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // second list
        let secondList = slow.next;
        slow.next = null;
        let reversedSecondHalf = this.reverse(secondList);
        let firstHalf = head;
        while(reversedSecondHalf){
            let temp1 = firstHalf.next;
            let temp2 = reversedSecondHalf.next;

            firstHalf.next = reversedSecondHalf;
            reversedSecondHalf.next = temp1;

            firstHalf = temp1;
            reversedSecondHalf = temp2;
        }
    return head;
    }

    reverse(head){
        if(!head){
            return null;
        }
        let current = head;
        let prev = null;

        while(current){
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        return prev;
    }
    calculateLength(head){
        if(!head){
            return 0;
        }
        let current = head;
        let size = 0;
        while(current){
            ++size;
            current = current.next;
        }
        return size;
    }
}
