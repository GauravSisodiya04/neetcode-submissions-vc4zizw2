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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        //We need to iterate over an array and take the first two lists if they are present

       if (!lists || lists.length === 0) return null;

    // We will keep merging pairs until only one list remains at index 0
    while (lists.length > 1) {
        let mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            // If there's an odd number of lists, the last one has no partner
            const l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        
        // Update our lists with the newly merged pairs
        lists = mergedLists;
    }

    function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}

    return lists[0];

       

       
    }
}
