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
        if(!root){
            return 0;
        }
        let queue = [];
        let depth = 0;

        queue.push(root);

        while(queue.length){
            let level = queue.length;
            for(let i=0 ; i< level;i++){
                let node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            depth++;
        }

        return depth;
    }
}
