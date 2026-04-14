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
        if(root === null){
            return 0;
        }

        let queue = [root];
        let levels = 0;
        while(queue.length){
            ++levels;
            let levelSize = queue.length;
            for(let i = 0; i< levelSize; i++){
                 let curr = queue.shift();
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
            }
           
        }
        return levels;

    }
}
