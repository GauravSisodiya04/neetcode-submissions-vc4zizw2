/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        // We can solve this problem in multiple ways , lets focus on an BFS way. 
        if(root === null) return 0;
        let queue = [root];
        let level = 0;

        while(queue.length){
            //We enetered first level
            ++level;
            let currentSizeOfQueueAtThisLevel = queue.length;
            for(let i=0;i<currentSizeOfQueueAtThisLevel; i++){
                let node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
        return level;
    }
}
