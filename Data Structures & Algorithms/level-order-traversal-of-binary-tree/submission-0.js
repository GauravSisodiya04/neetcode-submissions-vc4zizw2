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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return false;
        }
        let queue = [root];
        let resultingList = [];

        while(queue.length){
            let placeHolderArray = [];
            for(let i= queue.length ; i>0; i--){
                let node = queue.shift(); // root
                placeHolderArray.push(node.val);
                if(node.left) queue.push(node.left);
                if(node.right)queue.push(node.right);
            }
            resultingList.push(placeHolderArray);
        }

        return resultingList;
        
    }
}
